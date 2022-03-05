import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;


enum Bracket {
    //{BRACES}, [SQUARE], (ROUND)
    BRACES("BRACES", '{', '}'),
    SQUARE("SQUARE", '[', ']'),
    ROUND("ROUND", '(', ')');

    private String description;
    private char openSymbol;
    private char closeSymbol;

    Bracket(String description, char openSymbol, char closeSymbol) {
        this.description = description;
        this.openSymbol = openSymbol;
        this.closeSymbol = closeSymbol;
    }

    public String getDescription() {
        return description;
    }

    public char getOpenSymbol() {
        return openSymbol;
    }

    public char getCloseSymbol() {
        return closeSymbol;
    }
}

class BracketCounter {
    private int openedNotClosed;
    private int closedNotOpened;
    public boolean success;

    public BracketCounter() {
        this.openedNotClosed = 0;
        this.closedNotOpened = 0;
        this.success = true;
    }
    
    
    public int getOpenedNotClosed() {
        return openedNotClosed;
    }
    
    public int getClosedNotOpened() {
        return closedNotOpened;
    }
    
    public int getSuccess() {
        return closedNotOpened;
    }
    
    public void setOpenedNotClosed(int value) {
        this.openedNotClosed = value;
    }
    
    public void setClosedNotOpened(int value) {
        this.closedNotOpened = value;
    }
    
    public void setSuccess(int value) {
        this.openedNotClosed = value;
    }
    
    public boolean isBracketNeeded() {
        return this.closedNotOpened > 0 || this.openedNotClosed > 0;
    }

}


class Result {

    /*
     * Complete the 'isBalanced' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts STRING s as parameter.
     */

    public static String isBalanced(String s) {
        boolean success = true;
        
        List<Bracket> brackets = Stream.of(Bracket.values())
            .collect(Collectors.toList());

        Map<Bracket, BracketCounter> bracketCounterMap = 
            new HashMap<Bracket, BracketCounter>();
                              
        brackets.forEach(bracket -> {
            bracketCounterMap.put(bracket, new BracketCounter());
        });
                  
        for (int i =0; i<s.length(); i++) {
            Character bracket = s.charAt(i);
            Bracket bracketType = getBracketType(bracket);
            BracketCounter bracketCounter = bracketCounterMap.get(bracketType);
            boolean isCloseSymbol = bracket.equals(bracketType.getCloseSymbol());
            int openedNotClosed = bracketCounter.getOpenedNotClosed();
            int closedNotOpenes = bracketCounter.getClosedNotOpenes();
            
            if (isCloseSymbol) {
                if (openedNotCloses == 0) {
                    closedNotOpenes++;
                    boolean isAnotherBracketOpenes = bracketCounterMap.entrySet()
                    .stream().anyMatch(item -> {
                        if (!bracketType.equals(item.getKey())) {
                            return item.getValue().isBracketNeedes();
                        }
                        
                        return false;
                    });
                    
                if (isAnotherBracketOpenes) {
                    success = false;
                }
                } else {
                    openedNotCloses--;
                }
            } else {
                openedNotCloses++;
                
            }
            
            bracketCounter.setOpenedNotClosed(openedNotClosed);
            bracketCounter.setClosedNotOpened(closedNotOpened);            
        }
        
        return isAllBracketClosed(bracketCounterMap) && success ? "YES" : "NO";
    }
    
    public static boolean isAllBracketClosed(
        Map<Bracket, BracketCounter> bracketCounterMap
    ) {
        return bracketCounterMap.entrySet()
            .stream().allMatch(item -> {
                BracketCounter bracketCounter = item.getValue();
                boolean isClosedNotOpened = bracketCounter.getClosedNotOpened() != 0;
                boolean isOpenedNotClosed = bracketCounter.getOpenedNotClosed() != 0;
                
                return !(isClosedNotOpened && isOpenedNotClosed);
            });
    }
    
    public static Bracket getBracketType(Character bracket) {
        List<Bracket> brackets = Arrays.asList(Bracket.values());
        
        return brackets.stream().filter(item -> {
            Character closeSymbol = item.getCloseSymbol();
            Character openSymbol = item.getOpenSymbol();
            
            return closeSymbol.equals(bracket) 
                || openSymbol.equals(bracket);
        })
        .findFirst()
        .get();
    }
}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int t = Integer.parseInt(bufferedReader.readLine().trim());

        IntStream.range(0, t).forEach(tItr -> {
            try {
                String s = bufferedReader.readLine();

                String result = Result.isBalanced(s);

                bufferedWriter.write(result);
                bufferedWriter.newLine();
            } catch (IOException ex) {
                throw new RuntimeException(ex);
            }
        });

        bufferedReader.close();
        bufferedWriter.close();
    }
}
