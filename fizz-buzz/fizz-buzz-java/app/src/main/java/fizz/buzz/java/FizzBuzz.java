/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package fizz.buzz.java;

import java.util.ArrayList;
import java.util.List;

public class FizzBuzz {
    public List<String> fizzbuzz(int n) {
        List<String> outputArr = new ArrayList<>(); 
        for (int i = 1; i <= n; i++) { 
            if (i % 3 == 0 && i % 5 == 0) {
                outputArr.add("FizzBuzz");
            } else if (i % 3 == 0) {
                outputArr.add("Fizz");
            } else if (i % 5 == 0) {
                outputArr.add("Buzz");
            } else {
                outputArr.add(String.valueOf(i)); 
            }
        }
        return outputArr;
    }
}

