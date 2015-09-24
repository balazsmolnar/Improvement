using System;
using System.Collections.Generic;
using System.Collections;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Results;

namespace Improvement.Controllers
{

    public class ImprovementController : ApiController
    {
        public static int FreePoints = 5;
        IImprovementRepository respository_ = new MemoryImprovementRepository();

        public ImprovementController()
        {
            
        }

        // GET api/<controller>
        public async Task<IHttpActionResult> Get()
        {
            var data = await Improvements;
            return Ok(data);
        }

        public Task<IEnumerable<Improvement>> Improvements
        {
            get
            {
                Task<IEnumerable<Improvement>> task =
                    new Task<IEnumerable<Improvement>>(
                        () => respository_.GetAll()
                );
                task.Start();
                return task;
            }
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]Improvement improvement)
        {
            improvement.Owner = System.DirectoryServices.AccountManagement.UserPrincipal.Current.DisplayName;
            this.respository_.Save(improvement);
        }

        // PUT api/<controller>/5
        [System.Web.Http.HttpPut]
        public void Put(Improvement improvement)
        {
            this.respository_.Save(improvement);
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }

        [System.Web.Http.ActionName("IncreasePoint")]
        [System.Web.Http.HttpPost]
        public async Task<IHttpActionResult> IncreasePoint(int id)
        {            
            if (FreePoints == 0)
                return BadRequest();

            await IncreasePointAsync(id);
            return Ok();
        }

        private Task IncreasePointAsync(int id)
        {
            return Task.Run(() =>
            {
                var improvement = this.respository_.Get(id);
                if (improvement != null)
                {
                    improvement.UserPoints++;
                    improvement.Points++;
                    FreePoints--;
                }
                this.respository_.Save(improvement);
            });
        }
        
        [System.Web.Http.ActionName("DecreasePoint")]
        [System.Web.Http.HttpPost]
        public void DecreasePoint(int id)
        {
            var improvement = this.respository_.Get(id);
            if (improvement != null && improvement.UserPoints > 0)
            {
                improvement.UserPoints--;
                improvement.Points--;
                FreePoints++;
            }
            this.respository_.Save(improvement);
        }

        [System.Web.Http.ActionName("AddComment")]
        [System.Web.Http.HttpPost]
        public void AddComment(int id, [FromBody]Comment comment)
        {
            this.respository_.AddComment(this.respository_.Get(id), comment, GetUserName());
        }


        [System.Web.Http.ActionName("GetUserName")]
        [System.Web.Http.HttpGet]
        public string GetUserName()
        {
            return System.DirectoryServices.AccountManagement.UserPrincipal.Current.DisplayName;
        }

        [System.Web.Http.ActionName("GetFreePoints")]
        [System.Web.Http.HttpGet]
        public int GetFreePoints()
        {
            return FreePoints;
        }
    }
}