package an.samples.utils;


public final class TimeLogger {
	private final long myStartTime;

	public TimeLogger() {
		myStartTime = System.currentTimeMillis();
	}

	public void log(String text) {
		System.out.println(text + " " + getElapsedTime() + " sec");
	}

	private double getElapsedTime() {
		return (System.currentTimeMillis() - myStartTime) / 1000.;
	}
}
