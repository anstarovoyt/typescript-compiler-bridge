package an.samples.utils;

import com.google.common.io.CharStreams;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public final class Util {
	public static void throwRuntime(Exception e) {
		throw new RuntimeException(e.getMessage(), e);
	}

	public static String toString(InputStream stream) {
		try (InputStreamReader inputStreamReader = new InputStreamReader(stream)) {
			return CharStreams.toString(inputStreamReader);
		} catch (IOException e) {
			throwRuntime(e);
		}

		return null;
	}
}

