public class Tea implements Drink {
    @Override
    public String getDescription() {
        return "Tea";
    }

    @Override
    public double getCost() {
        return 1.5;
    }
}
