package an.samples.bridge.service;

import an.samples.Main;
import an.samples.bridge.TypeScriptCompiler;
import an.samples.utils.Util;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.InputStream;
import java.util.List;

public class TypeScriptServiceCompiler implements TypeScriptCompiler {

    public static final String COMPILE_STRING = "ts1.compileFile(%s, %s)";
    public static final String RECOMPILE_STRING = "ts1.recompileFile(%s, %s)";
    private final ScriptEngine myEngine;
    private final Object lock = new Object();
    private boolean isFirst = true;

    public TypeScriptServiceCompiler() {
        ScriptEngineManager engineManager = new ScriptEngineManager();
        myEngine = engineManager.getEngineByName("nashorn");


        try {
            myEngine.eval(Util.toString(getServiceSourceAsStream()));
            myEngine.eval(Util.toString(getBridgeSourceAsStream()));
        } catch (ScriptException e) {
            Util.throwRuntime(e);
        }
    }


    @Override
    public List<String> compile(String filePath) {
        synchronized (lock) {
            try {
                myEngine.eval(String.format(isFirst ? COMPILE_STRING : RECOMPILE_STRING, wrapWithQuotes(filePath), wrapWithQuotes(Util.getAbsoluteResourcePath("ts1.3"))));
                if (isFirst) isFirst = false;

            } catch (ScriptException e) {
                Util.throwRuntime(e);
            }
        }
        return null;
    }

    private String wrapWithQuotes(String path) {
        return "\"" + path + "\"";
    }

    private InputStream getBridgeSourceAsStream() {
        return Main.class.getClassLoader().getResourceAsStream("ts1.3/myCompilerHost.js");
    }

    private InputStream getServiceSourceAsStream() {
        return Main.class.getClassLoader().getResourceAsStream("ts1.3/typescriptServices.js");
    }
}
