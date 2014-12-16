package an.samples.bridge.externalService;

import an.samples.bridge.TypeScriptCompiler;

import java.util.List;


public class TypeScriptExternalCompiler implements TypeScriptCompiler {


    private CompilingConnector compilingConnector;

    public TypeScriptExternalCompiler() {
        compilingConnector = new CompilingConnector();
    }

    @Override
    public List<String> compile(String filePath) {
        compilingConnector.compile(filePath.toLowerCase());
        return null;
    }
}
