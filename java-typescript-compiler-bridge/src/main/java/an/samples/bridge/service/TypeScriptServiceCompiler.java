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

	private final ScriptEngine myEngine;

	public TypeScriptServiceCompiler() {
		ScriptEngineManager engineManager = new ScriptEngineManager();
		myEngine = engineManager.getEngineByName("nashorn");


		try {
			myEngine.eval(Util.toString(getServiceSourceAsStream()));
		} catch (ScriptException e) {
			Util.throwRuntime(e);
		}
	}

	private InputStream getServiceSourceAsStream() {
		return Main.class.getClassLoader().getResourceAsStream("ts1.3/typescriptServices.js");
	}

	@Override
	public List<String> compile(String filePath) {
		try {
			myEngine.eval("compile(\"" + filePath + "\")");

		} catch (ScriptException e) {
			Util.throwRuntime(e);
		}

		return null;
	}
}
