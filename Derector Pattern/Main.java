public class Main {
    public static void main(String[] args) {
        // Order 1: Coffee + Milk + Sugar
        Drink order1 = new Coffee();
        order1 = new MilkDecorator(order1);
        order1 = new SugarDecorator(order1);

        System.out.println("Order 1: " + order1.getDescription());
        System.out.println("Total: $" + order1.getCost());

        // Order 2: Tea + Cream
        Drink order2 = new Tea();
        order2 = new CreamDecorator(order2);

        System.out.println("Order 2: " + order2.getDescription());
        System.out.println("Total: $" + order2.getCost());
    }
}
