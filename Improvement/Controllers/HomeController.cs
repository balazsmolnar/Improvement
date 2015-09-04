using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Improvement.Controllers
{
    public class HomeController : Controller
    {
        protected override void Initialize(System.Web.Routing.RequestContext requestContext)
        {
            base.Initialize(requestContext);

            ViewBag.UserName = System.DirectoryServices.AccountManagement.UserPrincipal.Current.DisplayName;

        }

        [Authorize]
        public ActionResult Index()
        {
            return View();
        }

        [Authorize]
        public ActionResult ImprovementList()
        {
            return PartialView();
        }

        [Authorize]
        public ActionResult AddImprovement()
        {
            return PartialView();
        }

        [Authorize]
        public ActionResult EditImprovement(int id = -1)
        {
            return PartialView();
        }

    }
}