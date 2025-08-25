namespace Experimental.Pages.NavigationPage;

public partial class NavPage2 : ContentPage
{
	public NavPage2()
	{
		InitializeComponent();
	}

	private void NavPage3(object sender, EventArgs e)
	{
		Navigation.PushAsync(new NavPage3());
	}

	private void NavPage1(object sender, EventArgs e)
	{
		Navigation.PopAsync();
	}
}