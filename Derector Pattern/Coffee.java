public class Coffee implements Drink {
    @Override
    public String getDescription() {
        return "Coffee";
    }

    @Override
    public double getCost() {
        return 2.0;
    }
}
