using Experimental.Model;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Experimental.ViewModel
{
    public class FlyoutViewModel
    {
        public ObservableCollection<FlyoutMenuItem> MenuItems { get; }

        public FlyoutViewModel()
        {
            MenuItems = new ObservableCollection<FlyoutMenuItem>
        {
            new FlyoutMenuItem { Title = "Home", Icon = "home.png", TargetPage = "home" },
            new FlyoutMenuItem { Title = "Profile", Icon = "person.png", TargetPage = "profile" },
            new FlyoutMenuItem { Title = "Settings", Icon = "settings.png", TargetPage = "settings" }
        };
        }
    }

}
