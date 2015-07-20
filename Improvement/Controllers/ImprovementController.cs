using System;
using System.Collections.Generic;
using System.Collections;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Mvc;

namespace Improvement.Controllers
{
    public class Improvement
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
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
                                        "Legyen project gyümölcskosár. A pénzt katicás perselybe lehet gyűjteni."
                                },
                                new Improvement()
                                {
                                    Id = 2,
                                    Title = "Code review",
                                    Description =
                                        "Code review minden submit előtt."
                                },
                                new Improvement()
                                {
                                    Id = 3,
                                    Title = "Stand-up",
                                    Description = "Álljunk fel minden órában, és menjünk ki a teraszra."
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
        public void Post(Improvement improvement)
        {
            ImprovementList.Add(improvement);
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}