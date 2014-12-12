package an.samples;


import an.samples.bridge.TypeScriptCompiler;
import an.samples.bridge.service.TypeScriptServiceCompiler;
import an.samples.bridge.tsc.TypeScriptTscCompiler;
import an.samples.utils.TimeLogger;
import an.samples.utils.Util;
import org.junit.*;
import org.junit.rules.TestName;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;

public class MainTest {
	private static final String DEFAULT_FILE = "ts-files/core.ts";
	private static final String DEFAULT_FILE_JS = "ts-files/core.js";

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

		compiler.compile(getAbsoluteResourcePath(DEFAULT_FILE));
		assertFileExists(DEFAULT_FILE_JS);
		timeLogger.log(myName.getMethodName());
	}

	private String getAbsoluteResourcePath(String path) {
		return Paths.get(getFileUri(path)).toAbsolutePath().toString();
	}

	private URI getFileUri(String path) {
		URL url = Main.class.getClassLoader().getResource(path);
		Assert.assertNotNull(url);

		try {
			return url.toURI();
		} catch (URISyntaxException e) {
			Util.throwRuntime(e);
		}

		return null;
	}

	private void deleteCompiledFiles() throws IOException {
		Files.newDirectoryStream(Paths.get(getFileUri("ts-files"))).forEach(path -> {
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
		Assert.assertTrue(Files.exists(Paths.get(getFileUri(path))));
	}
}
