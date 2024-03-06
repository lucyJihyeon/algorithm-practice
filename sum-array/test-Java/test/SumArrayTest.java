import org.junit.*;
public class SumArrayTest {
    @Test
    public void testSumArray() {
        int[] arr = {4, 8, 15, 16, 23, 42};
        int result = sumArray.SumArray(arr);
        assertEquals(108, result);
    }

    
}