

using System.Collections.Generic;
using System.Linq;
using Improvement.Controllers;

namespace Improvement.Controllers
{
    internal class MemoryImprovementRepository : IImprovementRepository
    {
        static MemoryImprovementRepository()
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
                                    Owner = "XXXX",
                                    Comments = new Comment[]
                                    {
                                        new Comment() { Content = "Good idea!", Owner = "Balazs Molnar"},
                                        new Comment() { Content = "+1", Owner = "Balazs Molnar"}
                                    }.ToList()
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

        public void Save(Improvement improvement)
        {
            if (improvement.Id <= 0)
            {
                improvement.Id = ImprovementList.Count + 1;
                ImprovementList.Add(improvement);
            }
            else
            {
                var oldimprovement = ImprovementList.FirstOrDefault(i => i.Id == improvement.Id);
                if (oldimprovement != null)
                {
                    oldimprovement.Description = improvement.Description;
                    oldimprovement.Title = improvement.Title;
                }
            }
        }

        public System.Collections.Generic.IEnumerable<Improvement> GetAll()
        {
            return ImprovementList;
        }

        public void AddComment(Improvement improvement, Comment comment, string userName)
        {
            if (improvement != null)
            {
                if (improvement.Comments==null)
                    improvement.Comments = new List<Comment>();
                improvement.Comments.Insert(0, new Comment() { Content = comment.Content, Owner = userName });
            }

        }

        public Improvement Get(int id)
        {
            return ImprovementList.FirstOrDefault(i => i.Id == id);
        }
    }
}