package an.samples.bridge;

import an.samples.utils.Util;

import java.util.List;

public class TypeScriptTscCompiler implements TypeScriptCompiler {
    @Override
    public List<String> compile(String filePath) {
        ProcessBuilder builder = new ProcessBuilder();
        try {
            Process start = builder
                    .command("tsc --target es5 --sourceMap " + filePath)
                    .start();

            start.waitFor();

            return null;

        } catch (Exception e) {
            Util.throwRuntime(e);
        }

        return null;
    }
}
