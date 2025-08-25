namespace Experimental.Pages;

public partial class ContentPage2 : ContentPage
{
	public ContentPage2()
	{
		InitializeComponent();
	}

    private async void Go_To_ContentPage1_Clicked(object sender, EventArgs e)
    {
		//await Navigation.PushModalAsync(new ContentPage1());
		await Navigation.PopModalAsync();
    }

    private async void Go_To_ContentPage3_Clicked(object sender, EventArgs e)
    {
		//await Navigation.PushModalAsync(new ContentPage1());
		await Navigation.PushModalAsync(new ContentPage3());
    }
}