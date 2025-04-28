public class CreamDecorator extends DrinkDecorator {
    public CreamDecorator(Drink drink) {
        super(drink);
    }

    @Override
    public String getDescription() {
        return drink.getDescription() + ", Cream";
    }

    @Override
    public double getCost() {
        return drink.getCost() + 0.7;
    }
}
