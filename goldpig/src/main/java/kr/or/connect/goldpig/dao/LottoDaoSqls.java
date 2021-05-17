package kr.or.connect.goldpig.dao;

public class LottoDaoSqls {
	public static final String SELECT_NUM_ALL = "SELECT num1,num2,num3,num4,num5,num6,bonus FROM lotto order by round";
	public static final String SELECT_PRICE_ALL = "SELECT price1,price2,price3,price4,price5 FROM lotto order by round";
	public static final String SELECT_BY_ROUND = "SELECT num1,num2,num3,num4,num5,num6,bonus FROM lotto where round = :round";
	public static final String SELECT_BY_ROUND_P = "SELECT price1,price2,price3,price4,price5 FROM lotto where round = :round";
	//public static final  SELECT_ALL = "SELECT * FROM lotto";
}
