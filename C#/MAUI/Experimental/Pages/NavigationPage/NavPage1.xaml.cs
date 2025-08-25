namespace Experimental.Pages.NavigationPage;

public partial class NavPage1 : ContentPage
{
	public NavPage1()
	{
		InitializeComponent();
	}

	private void NavPage2(object sender, EventArgs e)
	{
		Navigation.PushAsync(new NavPage2());
	}
}