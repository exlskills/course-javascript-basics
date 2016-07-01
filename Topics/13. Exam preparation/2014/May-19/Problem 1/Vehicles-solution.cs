using System;

internal class Vehicles
{
    private static void Main()
    {
        var s = int.Parse(Console.ReadLine());
        var count = 0;

        int c1 = 4, c2 = 10, c3 = 3;
        for (var count1 = 0; count1 <= (s / c1) + 1; count1++)
        {
            for (var count2 = 0; count2 <= (s / c2) + 1; count2++)
            {
                for (var count3 = 0; count3 <= (s / c3) + 1; count3++)
                {
                    var all = (count1 * c1) + (count2 * c2) + (count3 * c3);
                    if (all == s)
                    {
                        // Console.WriteLine(count1, count2, count3);
                        count++;
                    }
                }
            }
        }

        Console.WriteLine(count);
    }
}
