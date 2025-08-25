namespace Experimental.Pages;

public partial class FormPage : ContentPage
{
	public FormPage()
	{
		InitializeComponent();
	}

    private void slider_ValueChanged(object sender, ValueChangedEventArgs e)
    {
        sliderlabel.Text = Math.Round(e.NewValue).ToString();
    }

    private void stepper_ValueChanged(object sender, ValueChangedEventArgs e)
    {
        stepperlabel.Text = e.NewValue.ToString();
    }

    private void ActivityIndicatorSwitch_Toggled(object sender, ToggledEventArgs e)
    {
        ActivityIndator.IsRunning = e.Value;
    }
}