namespace Experimental.Pages.NavigationPage;

public partial class NavPage3 : ContentPage
{
	public NavPage3()
	{
		InitializeComponent();
	}

	private void GoBack(object sender, EventArgs e)
	{
		Navigation.PopAsync();
	}
}