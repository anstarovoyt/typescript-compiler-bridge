package an.samples;


import an.samples.bridge.TypeScriptCompiler;
import an.samples.bridge.service.TypeScriptServiceCompiler;
import an.samples.bridge.tsc.TypeScriptTscCompiler;
import an.samples.utils.TimeLogger;
import an.samples.utils.Util;
import org.junit.*;
import org.junit.rules.TestName;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class MainTest {
	private static final String DEFAULT_FILE = "ts-files/core.ts";
	private static final String DEFAULT_FILE_JS = "ts-files/core.js";
	private static final String DEFAULT_FOLDER = "ts-files";

	@Rule
	public TestName myName = new TestName();

	@Before
	@After
	public void setUp() throws IOException {
		deleteCompiledFiles();
	}

	@Test
	public void testTryGetFile() {
		assertFileExists(DEFAULT_FILE);
	}

	@Test
	public void testTscCompiler() {
		testCompiler(new TypeScriptTscCompiler());
	}

	@Test
	public void testServiceCompiler() {
		testCompiler(new TypeScriptServiceCompiler());
	}

	private void testCompiler(TypeScriptCompiler compiler) {
		TimeLogger timeLogger = new TimeLogger();
		assertFileExists(DEFAULT_FILE);

		compiler.compile(Util.getAbsoluteResourcePath(DEFAULT_FILE));
		assertFileExists(DEFAULT_FILE_JS);
		timeLogger.log(myName.getMethodName());
	}

	private void deleteCompiledFiles() throws IOException {
		Files.newDirectoryStream(Paths.get(Util.getFileUri("ts-files"))).forEach(path -> {
			String fileName = path.getFileName().toString();
			if (!fileName.endsWith(".js") && !fileName.endsWith(".js.map")) {
				return;
			}

			try {
				Files.delete(path);
			} catch (IOException e) {
				Util.throwRuntime(e);
			}
		});
	}

	private void assertFileExists(String path) {
		Assert.assertTrue(Files.exists(Paths.get(Util.getFileUri(path))));
	}
}
