public class MilkDecorator extends DrinkDecorator {
    public MilkDecorator(Drink drink) {
        super(drink);
    }

    @Override
    public String getDescription() {
        return drink.getDescription() + ", Milk";
    }

    @Override
    public double getCost() {
        return drink.getCost() + 0.5;
    }
}
