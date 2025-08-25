using Experimental.Model;

namespace Experimental.Pages;

public partial class CarouselViewPage : ContentPage
{
    public CarouselViewPage()
    {
        InitializeComponent();

        var carouselitems = new List<CollectionItem>
{
    new CollectionItem
    {
        Id = 1,
        Title = "🌅 Morning Escape",
        Description = "Start your day with a breath of calm — embrace the sunrise vibes and fresh energy."
    },
    new CollectionItem
    {
        Id = 2,
        Title = "🚀 Next-Level Productivity",
        Description = "Unleash your focus with tools and tips that take your workflow to the stratosphere."
    },
    new CollectionItem
    {
        Id = 3,
        Title = "🌌 Deep Dive Moments",
        Description = "Enter a world of ideas, creativity, and flow — where inspiration meets execution."
    },
    new CollectionItem
    {
        Id = 4,
        Title = "🎯 Goal Crusher Mode",
        Description = "Turn ambition into action with daily hacks and mindset boosters. Let’s get it."
    },
    new CollectionItem
    {
        Id = 5,
        Title = "🌿 Digital Detox Zone",
        Description = "Step back, unplug, and recharge. Sometimes the best ideas come when you're offline."
    }
};

        CarouselItems.ItemsSource = carouselitems;
    }
}