package an.samples;


import an.samples.bridge.TypeScriptCompiler;
import an.samples.bridge.externalService.TypeScriptExternalCompiler;
import an.samples.bridge.service.TypeScriptServiceCompiler;
import an.samples.bridge.tsc.TypeScriptTscCompiler;
import an.samples.utils.TimeLogger;
import an.samples.utils.Util;
import org.junit.*;
import org.junit.rules.TestName;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Random;

import static an.samples.utils.Util.getAbsoluteResourcePath;
import static an.samples.utils.Util.log;
import static an.samples.utils.Util.readFileText;

public class MainTest {
    private static final String DEFAULT_FILE = "ts-files/core.ts";
    private static final String DEFAULT_FILE_JS = "ts-files/core.js";
    public static final String NAME_TEMPLATE = "NameTemplate";
    private static final String MODULE_TEXT = "\nmodule " + NAME_TEMPLATE + "%s {" +
            "\n export function doS() {};\n" +
            "}\n";

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

    @Test
    public void testTscReCompiler() {
        TypeScriptTscCompiler compiler = new TypeScriptTscCompiler();
        testRecompileSeveralTry(compiler);
    }

    @Test
    public void testServiceReCompiler() {
        TypeScriptServiceCompiler compiler = new TypeScriptServiceCompiler();
        testRecompileSeveralTry(compiler);
    }

    @Test
    public void testJExternalReCompiler() throws InterruptedException {
        TypeScriptExternalCompiler compiler = new TypeScriptExternalCompiler();
        testRecompileSeveralTry(compiler);
    }

    private void testRecompileSeveralTry(TypeScriptCompiler compiler) {
        TimeLogger timeLogger = new TimeLogger();
        testCompiler(compiler);
        String moduleName = addSimpleModuleToEndOfFile(DEFAULT_FILE);
        testCompiler(compiler);
        Assert.assertTrue(readFileText(getAbsoluteResourcePath(DEFAULT_FILE_JS)).contains(moduleName));

        moduleName = addSimpleModuleToEndOfFile(DEFAULT_FILE);
        testCompiler(compiler);
        Assert.assertTrue(readFileText(getAbsoluteResourcePath(DEFAULT_FILE_JS)).contains(moduleName));

        moduleName = addSimpleModuleToEndOfFile(DEFAULT_FILE);
        testCompiler(compiler);
        Assert.assertTrue(readFileText(getAbsoluteResourcePath(DEFAULT_FILE_JS)).contains(moduleName));

        moduleName = addSimpleModuleToEndOfFile(DEFAULT_FILE);
        testCompiler(compiler);
        Assert.assertTrue(readFileText(getAbsoluteResourcePath(DEFAULT_FILE_JS)).contains(moduleName));

        moduleName = addSimpleModuleToEndOfFile(DEFAULT_FILE);
        testCompiler(compiler);
        Assert.assertTrue(readFileText(getAbsoluteResourcePath(DEFAULT_FILE_JS)).contains(moduleName));

        moduleName = addSimpleModuleToEndOfFile(DEFAULT_FILE);
        testCompiler(compiler);
        Assert.assertTrue(readFileText(getAbsoluteResourcePath(DEFAULT_FILE_JS)).contains(moduleName));

        moduleName = addSimpleModuleToEndOfFile(DEFAULT_FILE);
        testCompiler(compiler);
        Assert.assertTrue(readFileText(getAbsoluteResourcePath(DEFAULT_FILE_JS)).contains(moduleName));
        timeLogger.log(myName.getMethodName() + ", total time");
    }

    private void testCompiler(TypeScriptCompiler compiler) {
        TimeLogger timeLogger = new TimeLogger();
        assertFileExists(DEFAULT_FILE);

        compiler.compile(getAbsoluteResourcePath(DEFAULT_FILE));
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

    private String addSimpleModuleToEndOfFile(String fileName) {
        String path = getAbsoluteResourcePath(fileName);
        String content = readFileText(path);

        long name = System.currentTimeMillis();
        Util.writeFile(path, content + String.format(MODULE_TEXT, String.valueOf(name)));

        return NAME_TEMPLATE + String.valueOf(name);
    }

    private void assertFileExists(String path) {
        Assert.assertTrue(Files.exists(Paths.get(Util.getFileUri(path))));
    }
}
