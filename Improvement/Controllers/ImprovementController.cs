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
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }

    public class ImprovementController : ApiController
    {
        // GET api/<controller>
        public async Task<IHttpActionResult> Get()
        {
            var data = await Movies;
            return Ok(data);
        }

        public Task<IEnumerable<Movie>> Movies
        {
            get
            {
                Task<IEnumerable<Movie>> task =
                    new Task<IEnumerable<Movie>>(
                        () =>
                            new Movie[]
                            {
                                new Movie()
                                {
                                    Id = 1,
                                    Title = "The Matrix",
                                    Description =
                                        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
                                },
                                new Movie()
                                {
                                    Id = 2,
                                    Title = "Annie Hall",
                                    Description =
                                        "Neurotic New York comedian Alvy Singer falls in love with the ditsy Annie Hall."
                                },
                                new Movie()
                                {
                                    Id = 3,
                                    Title = "Take the Money and Run",
                                    Description = "The life and times of Virgil Starkwell, inept bank robber."
                                }
                            });
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
        public void Post([FromBody]string value)
        {
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