using Experimental.Pages;
using Experimental.Pages.NavigationPage;

namespace Experimental
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

            //MainPage = new ContentPage1();
            //MainPage = new NavigationPage(new NavPage1());
            //MainPage = new AppShell();
            MainPage = new NavigationPage(new StackLayoutDemo());
        }
    }
}
