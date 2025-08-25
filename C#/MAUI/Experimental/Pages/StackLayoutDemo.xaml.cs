namespace Experimental.Pages;

public partial class StackLayoutDemo : ContentPage
{
	public StackLayoutDemo()
	{
		InitializeComponent();
	}

    private void GridLayoutButton_Clicked(object sender, EventArgs e)
    {
		Navigation.PushAsync(new GRID_DEMO_page());
    }

    private void AbsoluteLayoutButton_Clicked(object sender, EventArgs e)
    {
        Navigation.PushAsync(new AbsoluteLayoutDemo());
    }

    private void FlexLayout_Clicked(object sender, EventArgs e)
    {
        Navigation.PushAsync(new FlexLayoutDemoPage());
    }

    private void CommonControls_Clicked(object sender, EventArgs e)
    {
        Navigation.PushAsync(new CommonControlPage());
    }

    private void ActionControls_Clicked(object sender, EventArgs e)
    {
        DisplayAlert("Alert", "You could able to see the alert now !!", "Ok");
    }

    private void ImageButton1_Clicked(object sender, EventArgs e)
    {
        DisplayAlert("Image Clicked", "You have clicked an Image Button", "Ok", "Cancel");
    }

    private void SearchBar_SearchButtonPressed(object sender, EventArgs e)
    {
        DisplayAlert("Search", $"You searched for: {(string.IsNullOrWhiteSpace(SearchBar.Text) ? "an empty text" : SearchBar.Text)}", "OK");
    }

    private void FormPage_Clicked(object sender, EventArgs e)
    {
        Navigation.PushAsync(new FormPage());
    }

    private void CarouselViewPage_Clicked(object sender, EventArgs e)
    {
        Navigation.PushAsync(new CarouselViewPage());
    }
}