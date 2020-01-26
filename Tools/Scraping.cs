using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using AngleSharp.Html.Dom;
using AngleSharp.Html.Parser;
using GolfCourseLookBack.Models;

namespace GolfCourseLookBack.Tools
{
    public class Scraping
    {
        private HttpClient client;

        public Scraping()
        {
            client = new HttpClient();
        }

        public async Task<string> GetFieldAsync(int fieldnum)
        {
            string url = "http://shotnavi.jp/gcguide/cdata/cdata_" + fieldnum.ToString() + "_0.htm";
            var doc = await GetHtmlDocAsync(url);
            return CreateField(doc);
        }

        private async Task<IHtmlDocument> GetHtmlDocAsync(string url)
        {
            var res = await client.GetAsync(url);
            var content = await res.Content.ReadAsStringAsync();
            var parser = new HtmlParser();
            return await parser.ParseDocumentAsync(content);
        }

        private string CreateField(IHtmlDocument doc)
        {
            var name = doc.QuerySelector(".course-title > h1").TextContent.Trim();

            var courselist = doc.QuerySelector("div.course > div > ul")
                                .QuerySelectorAll("li")
                                .Select(item =>
                                {
                                    var name = item.QuerySelector(".course-title");
                                    var link = 0;
                                    if (name.TagName.ToLower() == "div")
                                    {
                                        var num = Regex.Matches(item.QuerySelector("a").GetAttribute("href"), "[0-9]+")
                                                    .Cast<Match>()
                                                    .Select(m => int.Parse(m.Value))
                                                    .ToArray();
                                        link = num[1];
                                    }
                                    return new { Name = name.TextContent.Trim(), Link = link };
                                })
                                .ToList();
            return courselist.ToString();
        }
    }
}
