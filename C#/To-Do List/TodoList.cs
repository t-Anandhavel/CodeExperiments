namespace To_Do_List
{
    public static class TodoList
    {
        public static void ToDoListAppStarter()
        {
            while (true)
            {
                Console.WriteLine("Options:");
                Console.WriteLine("[S]ee all the List-Items");
                Console.WriteLine("[A]dd a new item to the List");
                Console.WriteLine("[R]emove a item from the List");
                Console.WriteLine("[C]lear the full List");
                Console.WriteLine("[E]xit the Application");

                var Input = Console.ReadKey();
                Console.WriteLine();
                Console.WriteLine($"Your Input Key is : {Input.Key} ");
                Console.WriteLine();

                switch (Input.Key)
                {
                    case ConsoleKey.S:
                        PrintList();
                        break;
                    case ConsoleKey.A:
                        AddToList();
                        break;
                    case ConsoleKey.R:
                        RemoveFromList();
                        break;
                    case ConsoleKey.C:
                        ClearList();
                        break;
                    case ConsoleKey.E:
                        Console.WriteLine("Closing the Applications");
                        return;
                    default:
                        Console.WriteLine("Invalid Key, Please Enter the Right Key");
                        break;
                }
                Console.WriteLine();
            }
        }

        private static void PrintList()
        {
            Console.WriteLine("PrintList");
        }

        private static void AddToList()
        {

        }

        private static void RemoveFromList()
        {

        }

        private static void ClearList()
        {

        }
    }
}