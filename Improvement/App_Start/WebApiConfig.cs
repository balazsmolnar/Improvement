using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Http;

namespace Improvement
{
    class WebApiConfig
    {
        public static void Register(HttpConfiguration configuration)
        {
            configuration.Routes.MapHttpRoute("IncreasePoint", "api/{controller}/IncreasePoint/{id}",
                new { id = RouteParameter.Optional, action = "IncreasePoint" });

            configuration.Routes.MapHttpRoute("DecreasePoint", "api/{controller}/DecreasePoint/{id}",
                new { id = RouteParameter.Optional, action = "DecreasePoint" });

            configuration.Routes.MapHttpRoute("GetUserName", "api/{controller}/GetUserName",
                new { action = "GetUserName" });

            configuration.Routes.MapHttpRoute("API Default", "api/{controller}/{action}/{id}",
                new { id = RouteParameter.Optional });

            configuration.Routes.MapHttpRoute("AddComment", "api/{controller}/AddComment/{id}",
                new { id = RouteParameter.Optional, action = "AddComment" });

            configuration.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));
        }
    }
}