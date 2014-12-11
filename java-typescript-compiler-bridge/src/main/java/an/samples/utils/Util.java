package an.samples.utils;

public final class Util {
	public static void throwRuntime(Exception e) {
		throw new RuntimeException(e.getMessage(), e);
	}

}

