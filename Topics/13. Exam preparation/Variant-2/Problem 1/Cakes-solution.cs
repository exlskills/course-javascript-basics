using System;

internal class Cakes
{
    private static void Main()
    {
        var s = int.Parse(Console.ReadLine());
        var c1 = int.Parse(Console.ReadLine());
        var c2 = int.Parse(Console.ReadLine());
        var c3 = int.Parse(Console.ReadLine());
        var answer = 0;

        for (var count1 = 0; count1 <= (s / c1) + 1; count1++)
        {
            for (var count2 = 0; count2 <= (s / c2) + 1; count2++)
            {
                for (var count3 = 0; count3 <= (s / c3) + 1; count3++)
                {
                    var price = (count1 * c1) + (count2 * c2) + (count3 * c3);
                    if (price <= s)
                    {
                        answer = Math.Max(answer, price);
                    }
                }
            }
        }

        Console.WriteLine(answer);
    }
}
