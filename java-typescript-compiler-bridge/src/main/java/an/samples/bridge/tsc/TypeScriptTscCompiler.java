package an.samples.bridge.tsc;

import an.samples.bridge.TypeScriptCompiler;
import an.samples.utils.Util;
import com.google.common.base.Strings;
import com.google.common.io.CharStreams;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.List;

public class TypeScriptTscCompiler implements TypeScriptCompiler {
	@Override
	public List<String> compile(String filePath) {
		ProcessBuilder builder = new ProcessBuilder();
		try {
			Process start = builder
					.command("tsc", "--target", "es5", "--sourceMap", filePath)
					.start();

			int i = start.waitFor();

			if (i > 0) {
				String errors = toString(start.getErrorStream());
				if (!Strings.isNullOrEmpty(errors)) {
					throw new RuntimeException(errors);
				}

				String out = toString(start.getInputStream());
				if (!Strings.isNullOrEmpty(out)) {
					throw new RuntimeException(out);
				}
			}

			return getStrings(start.getInputStream());

		} catch (Exception e) {
			Util.throwRuntime(e);
		}

		return null;
	}

	private List<String> getStrings(InputStream stream) throws IOException {
		return CharStreams.readLines(new InputStreamReader(stream));
	}

	private String toString(InputStream stream) throws IOException {
		return CharStreams.toString(new InputStreamReader(stream));
	}
}
