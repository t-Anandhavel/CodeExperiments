namespace Experimental.Pages;

public partial class ContentPage1 : ContentPage
{
	public ContentPage1()
	{
		InitializeComponent();
	}

    private void GotoContentPageTwo_Clicked(object sender, EventArgs e)
    {
		Navigation.PushModalAsync(new ContentPage2());
    }
}