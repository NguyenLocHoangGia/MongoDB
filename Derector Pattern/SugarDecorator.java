public class SugarDecorator extends DrinkDecorator {
    public SugarDecorator(Drink drink) {
        super(drink);
    }

    @Override
    public String getDescription() {
        return drink.getDescription() + ", Sugar";
    }

    @Override
    public double getCost() {
        return drink.getCost() + 0.3;
    }
}
