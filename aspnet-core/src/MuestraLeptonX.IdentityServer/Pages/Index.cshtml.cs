using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace MuestraLeptonX.Pages;

public class IndexModel : AbpPageModel
{
    public ActionResult OnGet()
    {
        if (!CurrentUser.IsAuthenticated)
        {
            return Redirect("~/Account/Login");
        }
        else
        {
            return Page();
        }
    }
}
