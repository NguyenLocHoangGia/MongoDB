
// Calculator.java
import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Context context = new Context();
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter first number:");
        int a = scanner.nextInt();

        System.out.println("Enter second number:");
        int b = scanner.nextInt();

        System.out.println("Choose operation (add, subtract, multiply):");
        String operation = scanner.next();

        if (operation.equalsIgnoreCase("add")) {
            context.setStrategy(new ConcreteStrategyAdd());
        } else if (operation.equalsIgnoreCase("subtract")) {
            context.setStrategy(new ConcreteStrategySubtract());
        } else if (operation.equalsIgnoreCase("multiply")) {
            context.setStrategy(new ConcreteStrategyMultiply());
        } else {
            System.out.println("Invalid operation!");
            scanner.close();
            return;
        }

        int result = context.executeStrategy(a, b);
        System.out.println("Result: " + result);
        scanner.close();
    }
}
