namespace Experimental.Pages;

public partial class ContentPage3 : ContentPage
{
	public ContentPage3()
	{
		InitializeComponent();
	}

    private async void Go_To_ContentPage2_Clicked(object sender, EventArgs e)
    {
        //await Navigation.PushModalAsync(new ContentPage1());
        await Navigation.PopModalAsync();
    }
}