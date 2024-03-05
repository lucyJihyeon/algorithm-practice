import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class SumArrayTest {
    @Test
    public void testSumArray() {
        int[] arr = {4, 8, 15, 16, 23, 42};
        int result = SumArray.sumArray(arr);
        assertEquals(108, result);
    }
}