using System;
using System.Collections.Generic;
using System.Collections;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace Improvement.Controllers
{
    public class Improvement
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Points { get; set; }
        public int UserPoints { get; set; }
        public string Owner { get; set; }
    }

    public class ImprovementController : ApiController
    {
        static ImprovementController()
        {
            var improvements = new Improvement[]
                            {
                                new Improvement()
                                {
                                    Id = 1,
                                    Title = "Gyümölcskosár",
                                    Description =
                                        "Legyen project gyümölcskosár. A pénzt katicás perselybe lehet gyűjteni.",
                                    Points = 14,
                                    UserPoints = 0,
                                    Owner = "Balazs Molnar"
                                },
                                new Improvement()
                                {
                                    Id = 2,
                                    Title = "Code review",
                                    Description =
                                        "Code review minden submit előtt.",
                                    Points = 4,
                                    UserPoints = 0,
                                    Owner = "XXXX"
                                },
                                new Improvement()
                                {
                                    Id = 3,
                                    Title = "Stand-up",
                                    Description = "Álljunk fel minden órában, és menjünk ki a teraszra.",
                                    Points = 7,
                                    UserPoints = 0,
                                    Owner = "Balazs Molnar"
                                }
                            };
            ImprovementList = improvements.ToList();

        }
        private static List<Improvement> ImprovementList;

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
                        () => ImprovementList
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
            improvement.Id = ImprovementList.Count+1;
            improvement.Owner = System.DirectoryServices.AccountManagement.UserPrincipal.Current.DisplayName;
            ImprovementList.Add(improvement);
        }

        // PUT api/<controller>/5
        [System.Web.Http.HttpPut]
        public void Put(Improvement improvement)
        {
            var oldimprovement = ImprovementList.FirstOrDefault(i => i.Id == improvement.Id);
            if (oldimprovement != null) 
            {
                oldimprovement.Description = improvement.Description;
                oldimprovement.Title = improvement.Title;
            }
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }

        [System.Web.Http.ActionName("IncreasePoint")]
        [System.Web.Http.HttpPost]
        public void IncreasePoint(int id)
        {
            var improvement = ImprovementList.FirstOrDefault(i => i.Id == id);
            if (improvement != null)
            {
                improvement.UserPoints++;
                improvement.Points++;
            }
        }

        [System.Web.Http.ActionName("DecreasePoint")]
        [System.Web.Http.HttpPost]
        public void DecreasePoint(int id)
        {
            var improvement = ImprovementList.FirstOrDefault(i => i.Id == id);
            if (improvement != null && improvement.UserPoints > 0)
            {
                improvement.UserPoints--;
                improvement.Points--;
            }
        }

        [System.Web.Http.ActionName("GetUserName")]
        [System.Web.Http.HttpGet]
        public string GetUserName()
        {
            return System.DirectoryServices.AccountManagement.UserPrincipal.Current.DisplayName;
        }
    }
}