Console.WriteLine("Hello!");

int firstNumber, secondNumber;

Console.WriteLine("Enter the First Number : ");
while (true)
{
    if (int.TryParse(Console.ReadLine(), out firstNumber))
    {
        break;
    }
    Console.WriteLine("Enter a Valid First Number!!");
}

Console.WriteLine("Enter the Second Number : ");
while (true)
{
    if (int.TryParse(Console.ReadLine(), out secondNumber))
    {
        break;
    }
    Console.WriteLine("Enter a Valid Second Number!!");
}

Console.WriteLine("What do you want to do with those numbers?");
Console.WriteLine("[A]dd");
Console.WriteLine("[S]ubtract");
Console.WriteLine("[M]ultiply");

var choice = Console.ReadKey(true).KeyChar;
Console.WriteLine();
Console.WriteLine($"Your choice is {choice}");
Console.WriteLine();

switch (choice)
{
    case 'a':
        {
            Console.WriteLine($"{firstNumber} + {secondNumber} = {firstNumber + secondNumber}");
            break;
        }
    case 's':
        {
            Console.WriteLine($"{firstNumber} - {secondNumber} = {firstNumber - secondNumber}");
            break;
        }
    case 'm':
        {
            Console.WriteLine($"{firstNumber} x {secondNumber} = {firstNumber * secondNumber}");
            break;
        }
    default:
        {
            Console.WriteLine("Invalid Key!!");
            break;
        }
}

Console.WriteLine("Press any key to exit...");
Console.ReadKey(true);