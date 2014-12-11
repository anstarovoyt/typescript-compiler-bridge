package an.samples;


import an.samples.bridge.TypeScriptTscCompiler;
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
import java.util.List;

public class MainTest {
	public static final String DEFAULT_FILE = "ts-files/core.ts";
	@Rule
	public TestName myName = new TestName();

	@Before
	public void setUp() throws IOException {
		deleteCompiledFiles();
	}

	@After
	public void setDown() throws IOException {
		deleteCompiledFiles();
	}

	@Test
	public void testTryGetFile() {
		assertFileExists("ts-files/tsc.ts");
	}

	@Test
	public void testTscCompiler() {
		TimeLogger timeLogger = new TimeLogger();
		TypeScriptTscCompiler compiler = new TypeScriptTscCompiler();
		assertFileExists(DEFAULT_FILE);

		List<String> compile = compiler.compile(getAbsoluteResourcePath(DEFAULT_FILE));
		assertFileExists(DEFAULT_FILE);
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
