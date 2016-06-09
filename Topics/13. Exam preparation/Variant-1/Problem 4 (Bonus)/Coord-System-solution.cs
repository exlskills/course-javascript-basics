using System;

internal class CoordinateSystem
{
    private static void Main()
    {
        var x = int.Parse(Console.ReadLine());
        var y = int.Parse(Console.ReadLine());

        Console.WriteLine(Solve(x, y));
    }

    private static int Solve(int x, int y)
    {
        return x < 0 ? (y < 0 ? 2 : 0) : (y < 0 ? 3 : 1);
    }
}
