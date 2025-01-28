namespace To_Do_List
{
    public class TodoListApp
    {
        private readonly TodoListService _todoService;

        public TodoListApp(TodoListService todoService)
        {
            _todoService = todoService;
        }

        public void Start()
        {
            while (true)
            {
                ShowMenu();
                char input = GetValidMenuOption();

                switch (input)
                {
                    case 'S':
                        _todoService.PrintList();
                        break;
                    case 'A':
                        AddNewItem();
                        break;
                    case 'R':
                        RemoveItem();
                        break;
                    case 'C':
                        _todoService.ClearList();
                        Console.WriteLine("The list has been cleared.");
                        break;
                    case 'E':
                        Console.WriteLine("Exiting the application.");
                        return;
                    default:
                        Console.WriteLine("Invalid option.");
                        break;
                }
                Console.WriteLine();
            }
        }

        private void ShowMenu()
        {
            Console.WriteLine("Options:");
            Console.WriteLine("[S] See all items in the list");
            Console.WriteLine("[A] Add a new item to the list");
            Console.WriteLine("[R] Remove an item from the list");
            Console.WriteLine("[C] Clear the list");
            Console.WriteLine("[E] Exit the application");
        }

        private char GetValidMenuOption()
        {
            var validOptions = new HashSet<char> { 'S', 'A', 'R', 'C', 'E' };
            while (true)
            {
                Console.Write("Enter your choice: ");
                char input = Console.ReadKey().KeyChar.ToString().ToUpper()[0];
                Console.WriteLine();

                if (validOptions.Contains(input))
                {
                    return input;
                }
                Console.WriteLine("Invalid input. Please try again.");
            }
        }

        private void AddNewItem()
        {
            Console.WriteLine("Enter the item to add:");
            string? newItem = Console.ReadLine()?.Trim();

            if (string.IsNullOrWhiteSpace(newItem))
            {
                Console.WriteLine("Item cannot be empty.");
                return;
            }

            if (_todoService.AddToList(newItem))
            {
                Console.WriteLine($"'{newItem}' has been added to the list.");
            }
            else
            {
                Console.WriteLine($"'{newItem}' already exists in the list.");
            }
        }

        private void RemoveItem()
        {
            if (_todoService.ListIsEmpty())
            {
                Console.WriteLine("The to-do list is empty. Nothing to remove.");
                return;
            }

            Console.WriteLine("Current list:");
            _todoService.PrintList();

            Console.WriteLine("Enter the index of the item to remove:");
            if (int.TryParse(Console.ReadLine(), out int index))
            {
                if (_todoService.RemoveFromList(index - 1))
                {
                    Console.WriteLine("Item removed successfully.");
                }
                else
                {
                    Console.WriteLine("Invalid index. Please try again.");
                }
            }
            else
            {
                Console.WriteLine("Invalid input. Please enter a number.");
            }
        }
    }
}
