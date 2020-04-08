export default (expenses) => expenses.reduce( (t,exp) => t + exp.amount , 0)

