package lottogame.goldpig.dto;

public class LottoInfo {
	private int count;
	private int num1;
	private int num2;
	private int num3;
	private int num4;
	private int num5;
	private int num6;
	private int bonus;
	private long price1;
	private long price2;
	private long price3;
	private int price4;
	private int price5;
	
	public LottoInfo() {
		
	}
	
	public LottoInfo(int c, int n1, int n2, int n3, int n4, int n5, int n6, int b, long p1, long p2, long p3, int p4, int p5) {
		super();
		count = c;
		num1 = n1;
		num2 = n2;
		num3 = n3;
		num4 = n4;
		num5 = n5;
		num6 = n6;
		bonus = b;
		price1 = p1;
		price2 = p2;
		price3 = p3;
		price4 = p4;
		price5 = p5;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public int getNum1() {
		return num1;
	}

	public void setNum1(int num1) {
		this.num1 = num1;
	}

	public int getNum2() {
		return num2;
	}

	public void setNum2(int num2) {
		this.num2 = num2;
	}

	public int getNum3() {
		return num3;
	}

	public void setNum3(int num3) {
		this.num3 = num3;
	}

	public int getNum4() {
		return num4;
	}

	public void setNum4(int num4) {
		this.num4 = num4;
	}

	public int getNum5() {
		return num5;
	}

	public void setNum5(int num5) {
		this.num5 = num5;
	}

	public int getNum6() {
		return num6;
	}

	public void setNum6(int num6) {
		this.num6 = num6;
	}

	public int getBonus() {
		return bonus;
	}

	public void setBonus(int bonus) {
		this.bonus = bonus;
	}

	public long getPrice1() {
		return price1;
	}

	public void setPrice1(long price1) {
		this.price1 = price1;
	}

	public long getPrice2() {
		return price2;
	}

	public void setPrice2(long price2) {
		this.price2 = price2;
	}

	public long getPrice3() {
		return price3;
	}

	public void setPrice3(long price3) {
		this.price3 = price3;
	}

	public int getPrice4() {
		return price4;
	}

	public void setPrice4(int price4) {
		this.price4 = price4;
	}

	public int getPrice5() {
		return price5;
	}

	public void setPrice5(int price5) {
		this.price5 = price5;
	}

	@Override
	public String toString() {
		return "LottoInfo [count=" + count + ", num1=" + num1 + ", num2=" + num2 + ", num3=" + num3 + ", num4=" + num4
				+ ", num5=" + num5 + ", num6=" + num6 + ", bonus=" + bonus + ", price1=" + price1 + ", price2=" + price2
				+ ", price3=" + price3 + ", price4=" + price4 + ", price5=" + price5 + "]";
	}

}
