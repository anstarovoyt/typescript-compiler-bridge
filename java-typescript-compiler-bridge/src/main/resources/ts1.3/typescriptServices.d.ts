declare module ts {
}
declare module ts {
    interface ErrorCallback {
        (message: DiagnosticMessage): void;
    }
    interface CommentCallback {
        (pos: number, end: number): void;
    }
    interface Scanner {
        getStartPos(): number;
        getToken(): SyntaxKind;
        getTextPos(): number;
        getTokenPos(): number;
        getTokenText(): string;
        getTokenValue(): string;
        hasPrecedingLineBreak(): boolean;
        isIdentifier(): boolean;
        isReservedWord(): boolean;
        reScanGreaterToken(): SyntaxKind;
        reScanSlashToken(): SyntaxKind;
        scan(): SyntaxKind;
        setText(text: string): void;
        setTextPos(textPos: number): void;
        tryScan<T>(callback: () => T): T;
    }
    function tokenToString(t: SyntaxKind): string;
    function getLineStarts(text: string): number[];
    function getPositionFromLineAndCharacter(lineStarts: number[], line: number, character: number): number;
    function getLineAndCharacterOfPosition(lineStarts: number[], position: number): {
        line: number;
        character: number;
    };
    function positionToLineAndCharacter(text: string, pos: number): {
        line: number;
        character: number;
    };
    function isWhiteSpace(ch: number): boolean;
    function isLineBreak(ch: number): boolean;
    function isOctalDigit(ch: number): boolean;
    function skipTrivia(text: string, pos: number, stopAfterLineBreak?: boolean): number;
    function getLeadingCommentRanges(text: string, pos: number): CommentRange[];
    function getTrailingCommentRanges(text: string, pos: number): CommentRange[];
    function isIdentifierStart(ch: number, languageVersion: ScriptTarget): boolean;
    function isIdentifierPart(ch: number, languageVersion: ScriptTarget): boolean;
    function createScanner(languageVersion: ScriptTarget, skipTrivia: boolean, text?: string, onError?: ErrorCallback, onComment?: CommentCallback): Scanner;
}
declare module ts {
    interface TextRange {
        pos: number;
        end: number;
    }
    enum SyntaxKind {
        Unknown = 0,
        EndOfFileToken = 1,
        SingleLineCommentTrivia = 2,
        MultiLineCommentTrivia = 3,
        NewLineTrivia = 4,
        WhitespaceTrivia = 5,
        NumericLiteral = 6,
        StringLiteral = 7,
        RegularExpressionLiteral = 8,
        OpenBraceToken = 9,
        CloseBraceToken = 10,
        OpenParenToken = 11,
        CloseParenToken = 12,
        OpenBracketToken = 13,
        CloseBracketToken = 14,
        DotToken = 15,
        DotDotDotToken = 16,
        SemicolonToken = 17,
        CommaToken = 18,
        LessThanToken = 19,
        GreaterThanToken = 20,
        LessThanEqualsToken = 21,
        GreaterThanEqualsToken = 22,
        EqualsEqualsToken = 23,
        ExclamationEqualsToken = 24,
        EqualsEqualsEqualsToken = 25,
        ExclamationEqualsEqualsToken = 26,
        EqualsGreaterThanToken = 27,
        PlusToken = 28,
        MinusToken = 29,
        AsteriskToken = 30,
        SlashToken = 31,
        PercentToken = 32,
        PlusPlusToken = 33,
        MinusMinusToken = 34,
        LessThanLessThanToken = 35,
        GreaterThanGreaterThanToken = 36,
        GreaterThanGreaterThanGreaterThanToken = 37,
        AmpersandToken = 38,
        BarToken = 39,
        CaretToken = 40,
        ExclamationToken = 41,
        TildeToken = 42,
        AmpersandAmpersandToken = 43,
        BarBarToken = 44,
        QuestionToken = 45,
        ColonToken = 46,
        EqualsToken = 47,
        PlusEqualsToken = 48,
        MinusEqualsToken = 49,
        AsteriskEqualsToken = 50,
        SlashEqualsToken = 51,
        PercentEqualsToken = 52,
        LessThanLessThanEqualsToken = 53,
        GreaterThanGreaterThanEqualsToken = 54,
        GreaterThanGreaterThanGreaterThanEqualsToken = 55,
        AmpersandEqualsToken = 56,
        BarEqualsToken = 57,
        CaretEqualsToken = 58,
        Identifier = 59,
        BreakKeyword = 60,
        CaseKeyword = 61,
        CatchKeyword = 62,
        ClassKeyword = 63,
        ConstKeyword = 64,
        ContinueKeyword = 65,
        DebuggerKeyword = 66,
        DefaultKeyword = 67,
        DeleteKeyword = 68,
        DoKeyword = 69,
        ElseKeyword = 70,
        EnumKeyword = 71,
        ExportKeyword = 72,
        ExtendsKeyword = 73,
        FalseKeyword = 74,
        FinallyKeyword = 75,
        ForKeyword = 76,
        FunctionKeyword = 77,
        IfKeyword = 78,
        ImportKeyword = 79,
        InKeyword = 80,
        InstanceOfKeyword = 81,
        NewKeyword = 82,
        NullKeyword = 83,
        ReturnKeyword = 84,
        SuperKeyword = 85,
        SwitchKeyword = 86,
        ThisKeyword = 87,
        ThrowKeyword = 88,
        TrueKeyword = 89,
        TryKeyword = 90,
        TypeOfKeyword = 91,
        VarKeyword = 92,
        VoidKeyword = 93,
        WhileKeyword = 94,
        WithKeyword = 95,
        ImplementsKeyword = 96,
        InterfaceKeyword = 97,
        LetKeyword = 98,
        PackageKeyword = 99,
        PrivateKeyword = 100,
        ProtectedKeyword = 101,
        PublicKeyword = 102,
        StaticKeyword = 103,
        YieldKeyword = 104,
        AnyKeyword = 105,
        BooleanKeyword = 106,
        ConstructorKeyword = 107,
        DeclareKeyword = 108,
        GetKeyword = 109,
        ModuleKeyword = 110,
        RequireKeyword = 111,
        NumberKeyword = 112,
        SetKeyword = 113,
        StringKeyword = 114,
        Missing = 115,
        QualifiedName = 116,
        TypeParameter = 117,
        Parameter = 118,
        Property = 119,
        Method = 120,
        Constructor = 121,
        GetAccessor = 122,
        SetAccessor = 123,
        CallSignature = 124,
        ConstructSignature = 125,
        IndexSignature = 126,
        TypeReference = 127,
        TypeQuery = 128,
        TypeLiteral = 129,
        ArrayType = 130,
        TupleType = 131,
        ArrayLiteral = 132,
        ObjectLiteral = 133,
        PropertyAssignment = 134,
        PropertyAccess = 135,
        IndexedAccess = 136,
        CallExpression = 137,
        NewExpression = 138,
        TypeAssertion = 139,
        ParenExpression = 140,
        FunctionExpression = 141,
        ArrowFunction = 142,
        PrefixOperator = 143,
        PostfixOperator = 144,
        BinaryExpression = 145,
        ConditionalExpression = 146,
        OmittedExpression = 147,
        Block = 148,
        VariableStatement = 149,
        EmptyStatement = 150,
        ExpressionStatement = 151,
        IfStatement = 152,
        DoStatement = 153,
        WhileStatement = 154,
        ForStatement = 155,
        ForInStatement = 156,
        ContinueStatement = 157,
        BreakStatement = 158,
        ReturnStatement = 159,
        WithStatement = 160,
        SwitchStatement = 161,
        CaseClause = 162,
        DefaultClause = 163,
        LabeledStatement = 164,
        ThrowStatement = 165,
        TryStatement = 166,
        TryBlock = 167,
        CatchBlock = 168,
        FinallyBlock = 169,
        DebuggerStatement = 170,
        VariableDeclaration = 171,
        FunctionDeclaration = 172,
        FunctionBlock = 173,
        ClassDeclaration = 174,
        InterfaceDeclaration = 175,
        EnumDeclaration = 176,
        ModuleDeclaration = 177,
        ModuleBlock = 178,
        ImportDeclaration = 179,
        ExportAssignment = 180,
        EnumMember = 181,
        SourceFile = 182,
        Program = 183,
        SyntaxList = 184,
        Count = 185,
        FirstAssignment,
        LastAssignment,
        FirstReservedWord,
        LastReservedWord,
        FirstKeyword,
        LastKeyword,
        FirstFutureReservedWord,
        LastFutureReservedWord,
        FirstTypeNode,
        LastTypeNode,
        FirstPunctuation,
        LastPunctuation,
        FirstToken,
        LastToken,
        FirstTriviaToken,
        LastTriviaToken,
    }
    enum NodeFlags {
        Export = 1,
        Ambient = 2,
        QuestionMark = 4,
        Rest = 8,
        Public = 16,
        Private = 32,
        Protected = 64,
        Static = 128,
        MultiLine = 256,
        Synthetic = 512,
        DeclarationFile = 1024,
        Modifier,
        AccessibilityModifier,
    }
    interface Node extends TextRange {
        kind: SyntaxKind;
        flags: NodeFlags;
        id?: number;
        parent?: Node;
        symbol?: Symbol;
        locals?: SymbolTable;
        nextContainer?: Node;
        localSymbol?: Symbol;
    }
    interface NodeArray<T> extends Array<T>, TextRange {
        hasTrailingComma?: boolean;
    }
    interface Identifier extends Node {
        text: string;
    }
    interface QualifiedName extends Node {
        left: EntityName;
        right: Identifier;
    }
    interface EntityName extends Node {
    }
    interface ParsedSignature {
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        parameters: NodeArray<ParameterDeclaration>;
        type?: TypeNode;
    }
    interface Declaration extends Node {
        name?: Identifier;
    }
    interface TypeParameterDeclaration extends Declaration {
        constraint?: TypeNode;
    }
    interface SignatureDeclaration extends Declaration, ParsedSignature {
    }
    interface VariableDeclaration extends Declaration {
        type?: TypeNode;
        initializer?: Expression;
    }
    interface PropertyDeclaration extends VariableDeclaration {
    }
    interface ParameterDeclaration extends VariableDeclaration {
    }
    interface FunctionDeclaration extends Declaration, ParsedSignature {
        body?: Node;
    }
    interface MethodDeclaration extends FunctionDeclaration {
    }
    interface ConstructorDeclaration extends FunctionDeclaration {
    }
    interface AccessorDeclaration extends FunctionDeclaration {
    }
    interface TypeNode extends Node {
    }
    interface TypeReferenceNode extends TypeNode {
        typeName: EntityName;
        typeArguments?: NodeArray<TypeNode>;
    }
    interface TypeQueryNode extends TypeNode {
        exprName: EntityName;
    }
    interface TypeLiteralNode extends TypeNode {
        members: NodeArray<Node>;
    }
    interface ArrayTypeNode extends TypeNode {
        elementType: TypeNode;
    }
    interface TupleTypeNode extends TypeNode {
        elementTypes: NodeArray<TypeNode>;
    }
    interface StringLiteralTypeNode extends TypeNode {
        text: string;
    }
    interface Expression extends Node {
        contextualType?: Type;
    }
    interface UnaryExpression extends Expression {
        operator: SyntaxKind;
        operand: Expression;
    }
    interface BinaryExpression extends Expression {
        left: Expression;
        operator: SyntaxKind;
        right: Expression;
    }
    interface ConditionalExpression extends Expression {
        condition: Expression;
        whenTrue: Expression;
        whenFalse: Expression;
    }
    interface FunctionExpression extends Expression, FunctionDeclaration {
        body: Node;
    }
    interface LiteralExpression extends Expression {
        text: string;
    }
    interface ParenExpression extends Expression {
        expression: Expression;
    }
    interface ArrayLiteral extends Expression {
        elements: NodeArray<Expression>;
    }
    interface ObjectLiteral extends Expression {
        properties: NodeArray<Node>;
    }
    interface PropertyAccess extends Expression {
        left: Expression;
        right: Identifier;
    }
    interface IndexedAccess extends Expression {
        object: Expression;
        index: Expression;
    }
    interface CallExpression extends Expression {
        func: Expression;
        typeArguments?: NodeArray<TypeNode>;
        arguments: NodeArray<Expression>;
    }
    interface NewExpression extends CallExpression {
    }
    interface TypeAssertion extends Expression {
        type: TypeNode;
        operand: Expression;
    }
    interface Statement extends Node {
    }
    interface Block extends Statement {
        statements: NodeArray<Statement>;
    }
    interface VariableStatement extends Statement {
        declarations: NodeArray<VariableDeclaration>;
    }
    interface ExpressionStatement extends Statement {
        expression: Expression;
    }
    interface IfStatement extends Statement {
        expression: Expression;
        thenStatement: Statement;
        elseStatement?: Statement;
    }
    interface IterationStatement extends Statement {
        statement: Statement;
    }
    interface DoStatement extends IterationStatement {
        expression: Expression;
    }
    interface WhileStatement extends IterationStatement {
        expression: Expression;
    }
    interface ForStatement extends IterationStatement {
        declarations?: NodeArray<VariableDeclaration>;
        initializer?: Expression;
        condition?: Expression;
        iterator?: Expression;
    }
    interface ForInStatement extends IterationStatement {
        declaration?: VariableDeclaration;
        variable?: Expression;
        expression: Expression;
    }
    interface BreakOrContinueStatement extends Statement {
        label?: Identifier;
    }
    interface ReturnStatement extends Statement {
        expression?: Expression;
    }
    interface WithStatement extends Statement {
        expression: Expression;
        statement: Statement;
    }
    interface SwitchStatement extends Statement {
        expression: Expression;
        clauses: NodeArray<CaseOrDefaultClause>;
    }
    interface CaseOrDefaultClause extends Node {
        expression?: Expression;
        statements: NodeArray<Statement>;
    }
    interface LabeledStatement extends Statement {
        label: Identifier;
        statement: Statement;
    }
    interface ThrowStatement extends Statement {
        expression: Expression;
    }
    interface TryStatement extends Statement {
        tryBlock: Block;
        catchBlock?: CatchBlock;
        finallyBlock?: Block;
    }
    interface CatchBlock extends Block {
        variable: Identifier;
    }
    interface ClassDeclaration extends Declaration {
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        baseType?: TypeReferenceNode;
        implementedTypes?: NodeArray<TypeReferenceNode>;
        members: NodeArray<Node>;
    }
    interface InterfaceDeclaration extends Declaration {
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        baseTypes?: NodeArray<TypeReferenceNode>;
        members: NodeArray<Node>;
    }
    interface EnumMember extends Declaration {
        initializer?: Expression;
    }
    interface EnumDeclaration extends Declaration {
        members: NodeArray<EnumMember>;
    }
    interface ModuleDeclaration extends Declaration {
        body: Node;
    }
    interface ImportDeclaration extends Declaration {
        entityName?: EntityName;
        externalModuleName?: LiteralExpression;
    }
    interface ExportAssignment extends Statement {
        exportName: Identifier;
    }
    interface FileReference extends TextRange {
        filename: string;
    }
    interface CommentRange extends TextRange {
        hasTrailingNewLine?: boolean;
    }
    interface SourceFile extends Block {
        filename: string;
        text: string;
        getLineAndCharacterFromPosition(position: number): {
            line: number;
            character: number;
        };
        getPositionFromLineAndCharacter(line: number, character: number): number;
        amdDependencies: string[];
        referencedFiles: FileReference[];
        syntacticErrors: Diagnostic[];
        semanticErrors: Diagnostic[];
        hasNoDefaultLib: boolean;
        externalModuleIndicator: Node;
        nodeCount: number;
        identifierCount: number;
        symbolCount: number;
        isOpen: boolean;
        version: string;
        languageVersion: ScriptTarget;
        identifiers: Map<string>;
    }
    interface Program {
        getSourceFile(filename: string): SourceFile;
        getSourceFiles(): SourceFile[];
        getCompilerOptions(): CompilerOptions;
        getCompilerHost(): CompilerHost;
        getDiagnostics(sourceFile?: SourceFile): Diagnostic[];
        getGlobalDiagnostics(): Diagnostic[];
        getTypeChecker(fullTypeCheckMode: boolean): TypeChecker;
        getCommonSourceDirectory(): string;
    }
    interface SourceMapSpan {
        emittedLine: number;
        emittedColumn: number;
        sourceLine: number;
        sourceColumn: number;
        nameIndex?: number;
        sourceIndex: number;
    }
    interface SourceMapData {
        sourceMapFilePath: string;
        jsSourceMappingURL: string;
        sourceMapFile: string;
        sourceMapSourceRoot: string;
        sourceMapSources: string[];
        inputSourceFileNames: string[];
        sourceMapNames?: string[];
        sourceMapMappings: string;
        sourceMapDecodedMappings: SourceMapSpan[];
    }
    enum EmitReturnStatus {
        Succeeded = 0,
        AllOutputGenerationSkipped = 1,
        JSGeneratedWithSemanticErrors = 2,
        DeclarationGenerationSkipped = 3,
        EmitErrorsEncountered = 4,
        CompilerOptionsErrors = 5,
    }
    interface EmitResult {
        emitResultStatus: EmitReturnStatus;
        errors: Diagnostic[];
        sourceMaps: SourceMapData[];
    }
    interface TypeChecker {
        getProgram(): Program;
        getDiagnostics(sourceFile?: SourceFile): Diagnostic[];
        getDeclarationDiagnostics(sourceFile: SourceFile): Diagnostic[];
        getGlobalDiagnostics(): Diagnostic[];
        getNodeCount(): number;
        getIdentifierCount(): number;
        getSymbolCount(): number;
        getTypeCount(): number;
        checkProgram(): void;
        emitFiles(targetSourceFile?: SourceFile): EmitResult;
        getParentOfSymbol(symbol: Symbol): Symbol;
        getTypeOfSymbol(symbol: Symbol): Type;
        getPropertiesOfType(type: Type): Symbol[];
        getPropertyOfType(type: Type, propetyName: string): Symbol;
        getSignaturesOfType(type: Type, kind: SignatureKind): Signature[];
        getIndexTypeOfType(type: Type, kind: IndexKind): Type;
        getReturnTypeOfSignature(signature: Signature): Type;
        getSymbolsInScope(location: Node, meaning: SymbolFlags): Symbol[];
        getSymbolInfo(node: Node): Symbol;
        getTypeOfNode(node: Node): Type;
        getApparentType(type: Type): ApparentType;
        typeToString(type: Type, enclosingDeclaration?: Node, flags?: TypeFormatFlags): string;
        writeType(type: Type, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        symbolToString(symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags): string;
        writeSymbol(symbol: Symbol, writer: SymbolWriter, enclosingDeclaration?: Node, meaning?: SymbolFlags, flags?: SymbolFormatFlags): void;
        getFullyQualifiedName(symbol: Symbol): string;
        getAugmentedPropertiesOfApparentType(type: Type): Symbol[];
        getRootSymbol(symbol: Symbol): Symbol;
        getContextualType(node: Node): Type;
        getResolvedSignature(node: CallExpression, candidatesOutArray?: Signature[]): Signature;
        getSignatureFromDeclaration(declaration: SignatureDeclaration): Signature;
        writeSignature(signatures: Signature, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        writeTypeParameter(tp: TypeParameter, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        writeTypeParametersOfSymbol(symbol: Symbol, writer: SymbolWriter, enclosingDeclaraiton?: Node, flags?: TypeFormatFlags): void;
        isImplementationOfOverload(node: FunctionDeclaration): boolean;
        isUndefinedSymbol(symbol: Symbol): boolean;
        isArgumentsSymbol(symbol: Symbol): boolean;
        getEnumMemberValue(node: EnumMember): number;
        isValidPropertyAccess(node: PropertyAccess, propertyName: string): boolean;
        getAliasedSymbol(symbol: Symbol): Symbol;
    }
    interface SymbolWriter {
        writeKind(text: string, kind: SymbolDisplayPartKind): void;
        writeSymbol(text: string, symbol: Symbol): void;
        writeLine(): void;
        increaseIndent(): void;
        decreaseIndent(): void;
        clear(): void;
        trackSymbol(symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags): void;
    }
    enum TypeFormatFlags {
        None = 0,
        WriteArrayAsGenericType = 1,
        UseTypeOfFunction = 2,
        NoTruncation = 4,
        WriteArrowStyleSignature = 8,
        WriteOwnNameForAnyLike = 16,
        WriteTypeArgumentsOfSignature = 32,
    }
    enum SymbolFormatFlags {
        None = 0,
        WriteTypeParametersOrArguments = 1,
        UseOnlyExternalAliasing = 2,
    }
    enum SymbolAccessibility {
        Accessible = 0,
        NotAccessible = 1,
        CannotBeNamed = 2,
    }
    interface SymbolAccessiblityResult {
        accessibility: SymbolAccessibility;
        errorSymbolName?: string;
        errorModuleName?: string;
        aliasesToMakeVisible?: ImportDeclaration[];
    }
    interface EmitResolver {
        getProgram(): Program;
        getLocalNameOfContainer(container: Declaration): string;
        getExpressionNamePrefix(node: Identifier): string;
        getExportAssignmentName(node: SourceFile): string;
        isReferencedImportDeclaration(node: ImportDeclaration): boolean;
        isTopLevelValueImportedViaEntityName(node: ImportDeclaration): boolean;
        getNodeCheckFlags(node: Node): NodeCheckFlags;
        getEnumMemberValue(node: EnumMember): number;
        hasSemanticErrors(): boolean;
        isDeclarationVisible(node: Declaration): boolean;
        isImplementationOfOverload(node: FunctionDeclaration): boolean;
        writeTypeAtLocation(location: Node, enclosingDeclaration: Node, flags: TypeFormatFlags, writer: SymbolWriter): void;
        writeReturnTypeOfSignatureDeclaration(signatureDeclaration: SignatureDeclaration, enclosingDeclaration: Node, flags: TypeFormatFlags, writer: SymbolWriter): void;
        isSymbolAccessible(symbol: Symbol, enclosingDeclaration: Node, meaning: SymbolFlags): SymbolAccessiblityResult;
        isImportDeclarationEntityNameReferenceDeclarationVisible(entityName: EntityName): SymbolAccessiblityResult;
        getConstantValue(node: PropertyAccess): number;
    }
    enum SymbolFlags {
        Variable = 1,
        Property = 2,
        EnumMember = 4,
        Function = 8,
        Class = 16,
        Interface = 32,
        Enum = 64,
        ValueModule = 128,
        NamespaceModule = 256,
        TypeLiteral = 512,
        ObjectLiteral = 1024,
        Method = 2048,
        Constructor = 4096,
        GetAccessor = 8192,
        SetAccessor = 16384,
        CallSignature = 32768,
        ConstructSignature = 65536,
        IndexSignature = 131072,
        TypeParameter = 262144,
        ExportValue = 524288,
        ExportType = 1048576,
        ExportNamespace = 2097152,
        Import = 4194304,
        Instantiated = 8388608,
        Merged = 16777216,
        Transient = 33554432,
        Prototype = 67108864,
        Value,
        Type,
        Namespace,
        Module,
        Accessor,
        Signature,
        ParameterExcludes,
        VariableExcludes,
        PropertyExcludes,
        EnumMemberExcludes,
        FunctionExcludes,
        ClassExcludes,
        InterfaceExcludes,
        EnumExcludes,
        ValueModuleExcludes,
        NamespaceModuleExcludes = 0,
        MethodExcludes,
        GetAccessorExcludes,
        SetAccessorExcludes,
        TypeParameterExcludes,
        ImportExcludes,
        ModuleMember,
        ExportHasLocal,
        HasLocals,
        HasExports,
        HasMembers,
        IsContainer,
        PropertyOrAccessor,
        Export,
    }
    interface Symbol {
        flags: SymbolFlags;
        name: string;
        id?: number;
        mergeId?: number;
        declarations?: Declaration[];
        parent?: Symbol;
        members?: SymbolTable;
        exports?: SymbolTable;
        exportSymbol?: Symbol;
        valueDeclaration?: Declaration;
    }
    interface SymbolLinks {
        target?: Symbol;
        type?: Type;
        declaredType?: Type;
        mapper?: TypeMapper;
        referenced?: boolean;
        exportAssignSymbol?: Symbol;
    }
    interface TransientSymbol extends Symbol, SymbolLinks {
    }
    interface SymbolTable {
        [index: string]: Symbol;
    }
    enum NodeCheckFlags {
        TypeChecked = 1,
        LexicalThis = 2,
        CaptureThis = 4,
        EmitExtends = 8,
        SuperInstance = 16,
        SuperStatic = 32,
        ContextChecked = 64,
        EnumValuesComputed = 128,
    }
    interface NodeLinks {
        resolvedType?: Type;
        resolvedSignature?: Signature;
        resolvedSymbol?: Symbol;
        flags?: NodeCheckFlags;
        enumMemberValue?: number;
        isIllegalTypeReferenceInConstraint?: boolean;
        isVisible?: boolean;
        localModuleName?: string;
    }
    enum TypeFlags {
        Any = 1,
        String = 2,
        Number = 4,
        Boolean = 8,
        Void = 16,
        Undefined = 32,
        Null = 64,
        Enum = 128,
        StringLiteral = 256,
        TypeParameter = 512,
        Class = 1024,
        Interface = 2048,
        Reference = 4096,
        Tuple = 8192,
        Anonymous = 16384,
        FromSignature = 32768,
        Intrinsic,
        StringLike,
        NumberLike,
        ObjectType,
    }
    interface Type {
        flags: TypeFlags;
        id: number;
        symbol?: Symbol;
    }
    interface IntrinsicType extends Type {
        intrinsicName: string;
    }
    interface StringLiteralType extends Type {
        text: string;
    }
    interface ObjectType extends Type {
    }
    interface ApparentType extends Type {
        _apparentTypeBrand: any;
    }
    interface InterfaceType extends ObjectType {
        typeParameters: TypeParameter[];
        baseTypes: ObjectType[];
        declaredProperties: Symbol[];
        declaredCallSignatures: Signature[];
        declaredConstructSignatures: Signature[];
        declaredStringIndexType: Type;
        declaredNumberIndexType: Type;
    }
    interface TypeReference extends ObjectType {
        target: GenericType;
        typeArguments: Type[];
    }
    interface GenericType extends InterfaceType, TypeReference {
        instantiations: Map<TypeReference>;
        openReferenceTargets: GenericType[];
        openReferenceChecks: Map<boolean>;
    }
    interface TupleType extends ObjectType {
        elementTypes: Type[];
        baseArrayType: TypeReference;
    }
    interface ResolvedObjectType extends ObjectType {
        members: SymbolTable;
        properties: Symbol[];
        callSignatures: Signature[];
        constructSignatures: Signature[];
        stringIndexType: Type;
        numberIndexType: Type;
    }
    interface TypeParameter extends Type {
        constraint: Type;
        target?: TypeParameter;
        mapper?: TypeMapper;
    }
    enum SignatureKind {
        Call = 0,
        Construct = 1,
    }
    interface Signature {
        declaration: SignatureDeclaration;
        typeParameters: TypeParameter[];
        parameters: Symbol[];
        resolvedReturnType: Type;
        minArgumentCount: number;
        hasRestParameter: boolean;
        hasStringLiterals: boolean;
        target?: Signature;
        mapper?: TypeMapper;
        erasedSignatureCache?: Signature;
        isolatedSignatureType?: ObjectType;
    }
    enum IndexKind {
        String = 0,
        Number = 1,
    }
    interface TypeMapper {
        (t: Type): Type;
    }
    interface InferenceContext {
        typeParameters: TypeParameter[];
        inferences: Type[][];
        inferredTypes: Type[];
    }
    interface DiagnosticMessage {
        key: string;
        category: DiagnosticCategory;
        code: number;
    }
    interface DiagnosticMessageChain {
        messageText: string;
        category: DiagnosticCategory;
        code: number;
        next?: DiagnosticMessageChain;
    }
    interface Diagnostic {
        file: SourceFile;
        start: number;
        length: number;
        messageText: string;
        category: DiagnosticCategory;
        code: number;
    }
    enum DiagnosticCategory {
        Warning = 0,
        Error = 1,
        Message = 2,
    }
    interface CompilerOptions {
        charset?: string;
        codepage?: number;
        declaration?: boolean;
        diagnostics?: boolean;
        emitBOM?: boolean;
        help?: boolean;
        locale?: string;
        mapRoot?: string;
        module?: ModuleKind;
        noErrorTruncation?: boolean;
        noImplicitAny?: boolean;
        noLib?: boolean;
        noLibCheck?: boolean;
        noResolve?: boolean;
        out?: string;
        outDir?: string;
        removeComments?: boolean;
        sourceMap?: boolean;
        sourceRoot?: string;
        target?: ScriptTarget;
        version?: boolean;
        watch?: boolean;
        [option: string]: any;
    }
    enum ModuleKind {
        None = 0,
        CommonJS = 1,
        AMD = 2,
    }
    interface LineAndCharacter {
        line: number;
        character: number;
    }
    enum ScriptTarget {
        ES3 = 0,
        ES5 = 1,
    }
    interface ParsedCommandLine {
        options: CompilerOptions;
        filenames: string[];
        errors: Diagnostic[];
    }
    interface CommandLineOption {
        name: string;
        type: any;
        shortName?: string;
        description?: DiagnosticMessage;
        paramName?: DiagnosticMessage;
        error?: DiagnosticMessage;
    }
    enum CharacterCodes {
        nullCharacter = 0,
        maxAsciiCharacter = 127,
        lineFeed = 10,
        carriageReturn = 13,
        lineSeparator = 8232,
        paragraphSeparator = 8233,
        nextLine = 133,
        space = 32,
        nonBreakingSpace = 160,
        enQuad = 8192,
        emQuad = 8193,
        enSpace = 8194,
        emSpace = 8195,
        threePerEmSpace = 8196,
        fourPerEmSpace = 8197,
        sixPerEmSpace = 8198,
        figureSpace = 8199,
        punctuationSpace = 8200,
        thinSpace = 8201,
        hairSpace = 8202,
        zeroWidthSpace = 8203,
        narrowNoBreakSpace = 8239,
        ideographicSpace = 12288,
        mathematicalSpace = 8287,
        ogham = 5760,
        _ = 95,
        $ = 36,
        _0 = 48,
        _1 = 49,
        _2 = 50,
        _3 = 51,
        _4 = 52,
        _5 = 53,
        _6 = 54,
        _7 = 55,
        _8 = 56,
        _9 = 57,
        a = 97,
        b = 98,
        c = 99,
        d = 100,
        e = 101,
        f = 102,
        g = 103,
        h = 104,
        i = 105,
        j = 106,
        k = 107,
        l = 108,
        m = 109,
        n = 110,
        o = 111,
        p = 112,
        q = 113,
        r = 114,
        s = 115,
        t = 116,
        u = 117,
        v = 118,
        w = 119,
        x = 120,
        y = 121,
        z = 122,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        ampersand = 38,
        asterisk = 42,
        at = 64,
        backslash = 92,
        bar = 124,
        caret = 94,
        closeBrace = 125,
        closeBracket = 93,
        closeParen = 41,
        colon = 58,
        comma = 44,
        dot = 46,
        doubleQuote = 34,
        equals = 61,
        exclamation = 33,
        greaterThan = 62,
        lessThan = 60,
        minus = 45,
        openBrace = 123,
        openBracket = 91,
        openParen = 40,
        percent = 37,
        plus = 43,
        question = 63,
        semicolon = 59,
        singleQuote = 39,
        slash = 47,
        tilde = 126,
        backspace = 8,
        formFeed = 12,
        byteOrderMark = 65279,
        tab = 9,
        verticalTab = 11,
    }
    enum SymbolDisplayPartKind {
        aliasName = 0,
        className = 1,
        enumName = 2,
        fieldName = 3,
        interfaceName = 4,
        keyword = 5,
        lineBreak = 6,
        numericLiteral = 7,
        stringLiteral = 8,
        localName = 9,
        methodName = 10,
        moduleName = 11,
        operator = 12,
        parameterName = 13,
        propertyName = 14,
        punctuation = 15,
        space = 16,
        text = 17,
        typeParameterName = 18,
        enumMemberName = 19,
        functionName = 20,
        regularExpressionLiteral = 21,
    }
    interface CancellationToken {
        isCancellationRequested(): boolean;
    }
    interface CompilerHost {
        getSourceFile(filename: string, languageVersion: ScriptTarget, onError?: (message: string) => void): SourceFile;
        getDefaultLibFilename(): string;
        getCancellationToken?(): CancellationToken;
        writeFile(filename: string, data: string, writeByteOrderMark: boolean, onError?: (message: string) => void): void;
        getCurrentDirectory(): string;
        getCanonicalFileName(fileName: string): string;
        useCaseSensitiveFileNames(): boolean;
        getNewLine(): string;
    }
}
declare module ts {
    interface Map<T> {
        [index: string]: T;
    }
    interface StringSet extends Map<any> {
    }
    function forEach<T, U>(array: T[], callback: (element: T) => U): U;
    function contains<T>(array: T[], value: T): boolean;
    function indexOf<T>(array: T[], value: T): number;
    function countWhere<T>(array: T[], predicate: (x: T) => boolean): number;
    function filter<T>(array: T[], f: (x: T) => boolean): T[];
    function map<T, U>(array: T[], f: (x: T) => U): U[];
    function concatenate<T>(array1: T[], array2: T[]): T[];
    function uniqueElements<T>(array: T[]): T[];
    function sum(array: any[], prop: string): number;
    function binarySearch(array: number[], value: number): number;
    function hasProperty<T>(map: Map<T>, key: string): boolean;
    function getProperty<T>(map: Map<T>, key: string): T;
    function isEmpty<T>(map: Map<T>): boolean;
    function clone<T>(object: T): T;
    function forEachValue<T, U>(map: Map<T>, callback: (value: T) => U): U;
    function forEachKey<T, U>(map: Map<T>, callback: (key: string) => U): U;
    function lookUp<T>(map: Map<T>, key: string): T;
    function mapToArray<T>(map: Map<T>): T[];
    function arrayToMap<T>(array: T[], makeKey: (value: T) => string): Map<T>;
    var localizedDiagnosticMessages: Map<string>;
    function getLocaleSpecificMessage(message: string): string;
    function createFileDiagnostic(file: SourceFile, start: number, length: number, message: DiagnosticMessage, ...args: any[]): Diagnostic;
    function createCompilerDiagnostic(message: DiagnosticMessage, ...args: any[]): Diagnostic;
    function chainDiagnosticMessages(details: DiagnosticMessageChain, message: DiagnosticMessage, ...args: any[]): DiagnosticMessageChain;
    function flattenDiagnosticChain(file: SourceFile, start: number, length: number, diagnosticChain: DiagnosticMessageChain, newLine: string): Diagnostic;
    function compareValues<T>(a: T, b: T): number;
    function compareDiagnostics(d1: Diagnostic, d2: Diagnostic): number;
    function deduplicateSortedDiagnostics(diagnostics: Diagnostic[]): Diagnostic[];
    function normalizeSlashes(path: string): string;
    function getRootLength(path: string): number;
    var directorySeparator: string;
    function normalizePath(path: string): string;
    function getDirectoryPath(path: string): string;
    function isUrl(path: string): boolean;
    function isRootedDiskPath(path: string): boolean;
    function getNormalizedPathComponents(path: string, currentDirectory: string): string[];
    function getNormalizedPathFromPathComponents(pathComponents: string[]): string;
    function getRelativePathToDirectoryOrUrl(directoryPathOrUrl: string, relativeOrAbsolutePath: string, currentDirectory: string, getCanonicalFileName: (fileName: string) => string, isAbsolutePathAnUrl: boolean): string;
    function getBaseFilename(path: string): string;
    function combinePaths(path1: string, path2: string): string;
    function fileExtensionIs(path: string, extension: string): boolean;
    function removeFileExtension(path: string): string;
    function escapeString(s: string): string;
    interface ObjectAllocator {
        getNodeConstructor(kind: SyntaxKind): new () => Node;
        getSymbolConstructor(): new (flags: SymbolFlags, name: string) => Symbol;
        getTypeConstructor(): new (checker: TypeChecker, flags: TypeFlags) => Type;
        getSignatureConstructor(): new (checker: TypeChecker) => Signature;
    }
    var objectAllocator: ObjectAllocator;
    enum AssertionLevel {
        None = 0,
        Normal = 1,
        Aggressive = 2,
        VeryAggressive = 3,
    }
    module Debug {
        function shouldAssert(level: AssertionLevel): boolean;
        function assert(expression: any, message?: string, verboseDebugInfo?: () => string): void;
        function fail(message?: string): void;
    }
}
declare module ts {
    function getNodeConstructor(kind: SyntaxKind): new () => Node;
    function getSourceFileOfNode(node: Node): SourceFile;
    function nodePosToString(node: Node): string;
    function getStartPosOfNode(node: Node): number;
    function getTokenPosOfNode(node: Node, sourceFile?: SourceFile): number;
    function getTextOfNodeFromSourceText(sourceText: string, node: Node): string;
    function getTextOfNode(node: Node): string;
    function escapeIdentifier(identifier: string): string;
    function unescapeIdentifier(identifier: string): string;
    function identifierToString(identifier: Identifier): string;
    function createDiagnosticForNode(node: Node, message: DiagnosticMessage, arg0?: any, arg1?: any, arg2?: any): Diagnostic;
    function createDiagnosticForNodeFromMessageChain(node: Node, messageChain: DiagnosticMessageChain, newLine: string): Diagnostic;
    function getErrorSpanForNode(node: Node): Node;
    function isExternalModule(file: SourceFile): boolean;
    function isDeclarationFile(file: SourceFile): boolean;
    function isPrologueDirective(node: Node): boolean;
    function getLeadingCommentRangesOfNode(node: Node, sourceFileOfNode?: SourceFile): CommentRange[];
    function getJsDocComments(node: Declaration, sourceFileOfNode: SourceFile): CommentRange[];
    var fullTripleSlashReferencePathRegEx: RegExp;
    function forEachChild<T>(node: Node, cbNode: (node: Node) => T, cbNodes?: (nodes: Node[]) => T): T;
    function forEachReturnStatement<T>(body: Block, visitor: (stmt: ReturnStatement) => T): T;
    function isAnyFunction(node: Node): boolean;
    function getContainingFunction(node: Node): SignatureDeclaration;
    function getThisContainer(node: Node, includeArrowFunctions: boolean): Node;
    function getSuperContainer(node: Node): Node;
    function hasRestParameters(s: SignatureDeclaration): boolean;
    function isInAmbientContext(node: Node): boolean;
    function isDeclaration(node: Node): boolean;
    function isStatement(n: Node): boolean;
    function isDeclarationOrFunctionExpressionOrCatchVariableName(name: Node): boolean;
    function getAncestor(node: Node, kind: SyntaxKind): Node;
    function isKeyword(token: SyntaxKind): boolean;
    function isTrivia(token: SyntaxKind): boolean;
    function isModifier(token: SyntaxKind): boolean;
    function createSourceFile(filename: string, sourceText: string, languageVersion: ScriptTarget, version: string, isOpen?: boolean): SourceFile;
    function createProgram(rootNames: string[], options: CompilerOptions, host: CompilerHost): Program;
}
declare module ts {
    function isInstantiated(node: Node): boolean;
    function bindSourceFile(file: SourceFile): void;
}
declare module ts {
    function getIndentString(level: number): string;
    function shouldEmitToOwnFile(sourceFile: SourceFile, compilerOptions: CompilerOptions): boolean;
    function isExternalModuleOrDeclarationFile(sourceFile: SourceFile): boolean;
    function getDeclarationDiagnostics(program: Program, resolver: EmitResolver, targetSourceFile: SourceFile): Diagnostic[];
    function emitFiles(resolver: EmitResolver, targetSourceFile?: SourceFile): EmitResult;
}
declare module ts {
    function getDeclarationOfKind(symbol: Symbol, kind: SyntaxKind): Declaration;
    interface StringSymbolWriter extends SymbolWriter {
        string(): string;
    }
    function getSingleLineStringWriter(): StringSymbolWriter;
    function createTypeChecker(program: Program, fullTypeCheck: boolean): TypeChecker;
}
declare module TypeScript {
}
declare module TypeScript {
    enum DiagnosticCategory {
        Warning = 0,
        Error = 1,
        Message = 2,
        NoPrefix = 3,
    }
}
declare module TypeScript {
    var diagnosticInformationMap: ts.Map<any>;
}
declare module TypeScript {
    class ArrayUtilities {
        static sequenceEquals<T>(array1: T[], array2: T[], equals: (v1: T, v2: T) => boolean): boolean;
        static contains<T>(array: T[], value: T): boolean;
        static distinct<T>(array: T[], equalsFn?: (a: T, b: T) => boolean): T[];
        static last<T>(array: T[]): T;
        static lastOrDefault<T>(array: T[], predicate: (v: T, index: number) => boolean): T;
        static firstOrDefault<T>(array: T[], func: (v: T, index: number) => boolean): T;
        static first<T>(array: T[], func?: (v: T, index: number) => boolean): T;
        static sum<T>(array: T[], func: (v: T) => number): number;
        static select<T, S>(values: T[], func: (v: T) => S): S[];
        static where<T>(values: T[], func: (v: T) => boolean): T[];
        static any<T>(array: T[], func: (v: T) => boolean): boolean;
        static all<T>(array: T[], func: (v: T) => boolean): boolean;
        static binarySearch(array: number[], value: number): number;
        static createArray<T>(length: number, defaultValue: any): T[];
        static grow<T>(array: T[], length: number, defaultValue: T): void;
        static copy<T>(sourceArray: T[], sourceIndex: number, destinationArray: T[], destinationIndex: number, length: number): void;
        static indexOf<T>(array: T[], predicate: (v: T) => boolean): number;
    }
}
declare module TypeScript {
    enum AssertionLevel {
        None = 0,
        Normal = 1,
        Aggressive = 2,
        VeryAggressive = 3,
    }
    class Debug {
        private static currentAssertionLevel;
        static shouldAssert(level: AssertionLevel): boolean;
        static assert(expression: any, message?: string, verboseDebugInfo?: () => string): void;
        static fail(message?: string): void;
    }
}
declare module TypeScript {
    class Location {
        private _fileName;
        private _lineMap;
        private _start;
        private _length;
        constructor(fileName: string, lineMap: LineMap, start: number, length: number);
        fileName(): string;
        lineMap(): LineMap;
        line(): number;
        character(): number;
        start(): number;
        length(): number;
        static equals(location1: Location, location2: Location): boolean;
    }
    class Diagnostic extends Location {
        private _diagnosticKey;
        private _arguments;
        private _additionalLocations;
        constructor(fileName: string, lineMap: LineMap, start: number, length: number, diagnosticKey: string, _arguments?: any[], additionalLocations?: Location[]);
        toJSON(key: any): any;
        diagnosticKey(): string;
        arguments(): any[];
        text(): string;
        message(): string;
        additionalLocations(): Location[];
        static equals(diagnostic1: Diagnostic, diagnostic2: Diagnostic): boolean;
        info(): DiagnosticInfo;
    }
    function newLine(): string;
    function getLocalizedText(diagnosticKey: string, args: any[]): string;
    function getDiagnosticMessage(diagnosticKey: string, args: any[]): string;
}
declare module TypeScript {
    interface DiagnosticInfo {
        category: DiagnosticCategory;
        message: string;
        code: number;
    }
}
declare module TypeScript {
    class Errors {
        static argument(argument: string, message?: string): Error;
        static argumentOutOfRange(argument: string): Error;
        static argumentNull(argument: string): Error;
        static abstract(): Error;
        static notYetImplemented(): Error;
        static invalidOperation(message?: string): Error;
    }
}
declare module TypeScript {
    module IntegerUtilities {
        function integerDivide(numerator: number, denominator: number): number;
        function integerMultiplyLow32Bits(n1: number, n2: number): number;
        function isInteger(text: string): boolean;
        function isHexInteger(text: string): boolean;
    }
}
declare module TypeScript {
    class LineMap {
        private _computeLineStarts;
        private length;
        static empty: LineMap;
        private _lineStarts;
        constructor(_computeLineStarts: () => number[], length: number);
        toJSON(key: any): {
            lineStarts: number[];
            length: number;
        };
        equals(other: LineMap): boolean;
        lineStarts(): number[];
        lineCount(): number;
        getPosition(line: number, character: number): number;
        getLineNumberFromPosition(position: number): number;
        getLineStartPosition(lineNumber: number): number;
        fillLineAndCharacterFromPosition(position: number, lineAndCharacter: ILineAndCharacter): void;
        getLineAndCharacterFromPosition(position: number): LineAndCharacter;
    }
}
declare module TypeScript {
    class LineAndCharacter {
        private _line;
        private _character;
        constructor(line: number, character: number);
        line(): number;
        character(): number;
    }
}
declare module TypeScript {
    class StringUtilities {
        static isString(value: any): boolean;
        static endsWith(string: string, value: string): boolean;
        static startsWith(string: string, value: string): boolean;
        static repeat(value: string, count: number): string;
    }
}
declare module TypeScript {
    enum CharacterCodes {
        nullCharacter = 0,
        maxAsciiCharacter = 127,
        lineFeed = 10,
        carriageReturn = 13,
        lineSeparator = 8232,
        paragraphSeparator = 8233,
        nextLine = 133,
        space = 32,
        nonBreakingSpace = 160,
        enQuad = 8192,
        emQuad = 8193,
        enSpace = 8194,
        emSpace = 8195,
        threePerEmSpace = 8196,
        fourPerEmSpace = 8197,
        sixPerEmSpace = 8198,
        figureSpace = 8199,
        punctuationSpace = 8200,
        thinSpace = 8201,
        hairSpace = 8202,
        zeroWidthSpace = 8203,
        narrowNoBreakSpace = 8239,
        ideographicSpace = 12288,
        _ = 95,
        $ = 36,
        _0 = 48,
        _1 = 49,
        _2 = 50,
        _3 = 51,
        _4 = 52,
        _5 = 53,
        _6 = 54,
        _7 = 55,
        _8 = 56,
        _9 = 57,
        a = 97,
        b = 98,
        c = 99,
        d = 100,
        e = 101,
        f = 102,
        g = 103,
        h = 104,
        i = 105,
        j = 106,
        k = 107,
        l = 108,
        m = 109,
        n = 110,
        o = 111,
        p = 112,
        q = 113,
        r = 114,
        s = 115,
        t = 116,
        u = 117,
        v = 118,
        w = 119,
        x = 120,
        y = 121,
        z = 122,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        ampersand = 38,
        asterisk = 42,
        at = 64,
        backslash = 92,
        bar = 124,
        caret = 94,
        closeBrace = 125,
        closeBracket = 93,
        closeParen = 41,
        colon = 58,
        comma = 44,
        dot = 46,
        doubleQuote = 34,
        equals = 61,
        exclamation = 33,
        greaterThan = 62,
        lessThan = 60,
        minus = 45,
        openBrace = 123,
        openBracket = 91,
        openParen = 40,
        percent = 37,
        plus = 43,
        question = 63,
        semicolon = 59,
        singleQuote = 39,
        slash = 47,
        tilde = 126,
        backspace = 8,
        formFeed = 12,
        byteOrderMark = 65279,
        tab = 9,
        verticalTab = 11,
    }
}
declare module TypeScript {
    interface IScriptSnapshot {
        getText(start: number, end: number): string;
        getLength(): number;
        getLineStartPositions(): number[];
        getChangeRange(oldSnapshot: IScriptSnapshot): TextChangeRange;
    }
    module ScriptSnapshot {
        function fromString(text: string): IScriptSnapshot;
    }
}
declare module TypeScript {
    interface ISimpleText {
        length(): number;
        substr(start: number, length: number): string;
        charCodeAt(index: number): number;
        lineMap(): LineMap;
    }
}
declare module TypeScript {
    module LineMap1 {
        function fromSimpleText(text: ISimpleText): LineMap;
        function fromScriptSnapshot(scriptSnapshot: IScriptSnapshot): LineMap;
        function fromString(text: string): LineMap;
    }
}
declare module TypeScript.SimpleText {
    function fromString(value: string): ISimpleText;
    function fromScriptSnapshot(scriptSnapshot: IScriptSnapshot): ISimpleText;
}
declare module TypeScript.TextUtilities {
    interface ICharacterSequence {
        charCodeAt(index: number): number;
        length: number;
    }
    function parseLineStarts(text: ICharacterSequence): number[];
    function getLengthOfLineBreakSlow(text: ICharacterSequence, index: number, c: number): number;
    function getLengthOfLineBreak(text: ICharacterSequence, index: number): number;
    function isAnyLineBreakCharacter(c: number): boolean;
}
declare module TypeScript {
    interface ISpan {
        start(): number;
        end(): number;
    }
    class TextSpan implements ISpan {
        private _start;
        private _length;
        constructor(start: number, length: number);
        toJSON(key: any): any;
        start(): number;
        length(): number;
        end(): number;
        isEmpty(): boolean;
        containsPosition(position: number): boolean;
        containsTextSpan(span: TextSpan): boolean;
        overlapsWith(span: TextSpan): boolean;
        overlap(span: TextSpan): TextSpan;
        intersectsWithTextSpan(span: TextSpan): boolean;
        intersectsWith(start: number, length: number): boolean;
        intersectsWithPosition(position: number): boolean;
        intersection(span: TextSpan): TextSpan;
        static fromBounds(start: number, end: number): TextSpan;
    }
}
declare module TypeScript {
    class TextChangeRange {
        static unchanged: TextChangeRange;
        private _span;
        private _newLength;
        constructor(span: TextSpan, newLength: number);
        span(): TextSpan;
        newLength(): number;
        newSpan(): TextSpan;
        isUnchanged(): boolean;
        static collapseChangesAcrossMultipleVersions(changes: TextChangeRange[]): TextChangeRange;
    }
}
declare module TypeScript {
    module CharacterInfo {
        function isDecimalDigit(c: number): boolean;
        function isOctalDigit(c: number): boolean;
        function isHexDigit(c: number): boolean;
        function hexValue(c: number): number;
        function isWhitespace(ch: number): boolean;
        function isLineTerminator(ch: number): boolean;
    }
}
declare module TypeScript {
    enum SyntaxConstants {
        None = 0,
        NodeDataComputed = 1,
        NodeIncrementallyUnusableMask = 2,
        NodeParsedInStrictModeMask = 4,
        NodeFullWidthShift = 3,
    }
}
declare module TypeScript {
    class FormattingOptions {
        useTabs: boolean;
        spacesPerTab: number;
        indentSpaces: number;
        newLineCharacter: string;
        constructor(useTabs: boolean, spacesPerTab: number, indentSpaces: number, newLineCharacter: string);
        static defaultOptions: FormattingOptions;
    }
}
declare module TypeScript {
}
declare module TypeScript {
    enum SyntaxKind {
        None = 0,
        List = 1,
        SeparatedList = 2,
        TriviaList = 3,
        WhitespaceTrivia = 4,
        NewLineTrivia = 5,
        MultiLineCommentTrivia = 6,
        SingleLineCommentTrivia = 7,
        SkippedTokenTrivia = 8,
        ErrorToken = 9,
        EndOfFileToken = 10,
        IdentifierName = 11,
        RegularExpressionLiteral = 12,
        NumericLiteral = 13,
        StringLiteral = 14,
        BreakKeyword = 15,
        CaseKeyword = 16,
        CatchKeyword = 17,
        ContinueKeyword = 18,
        DebuggerKeyword = 19,
        DefaultKeyword = 20,
        DeleteKeyword = 21,
        DoKeyword = 22,
        ElseKeyword = 23,
        FalseKeyword = 24,
        FinallyKeyword = 25,
        ForKeyword = 26,
        FunctionKeyword = 27,
        IfKeyword = 28,
        InKeyword = 29,
        InstanceOfKeyword = 30,
        NewKeyword = 31,
        NullKeyword = 32,
        ReturnKeyword = 33,
        SwitchKeyword = 34,
        ThisKeyword = 35,
        ThrowKeyword = 36,
        TrueKeyword = 37,
        TryKeyword = 38,
        TypeOfKeyword = 39,
        VarKeyword = 40,
        VoidKeyword = 41,
        WhileKeyword = 42,
        WithKeyword = 43,
        ClassKeyword = 44,
        ConstKeyword = 45,
        EnumKeyword = 46,
        ExportKeyword = 47,
        ExtendsKeyword = 48,
        ImportKeyword = 49,
        SuperKeyword = 50,
        ImplementsKeyword = 51,
        InterfaceKeyword = 52,
        LetKeyword = 53,
        PackageKeyword = 54,
        PrivateKeyword = 55,
        ProtectedKeyword = 56,
        PublicKeyword = 57,
        StaticKeyword = 58,
        YieldKeyword = 59,
        AnyKeyword = 60,
        BooleanKeyword = 61,
        ConstructorKeyword = 62,
        DeclareKeyword = 63,
        GetKeyword = 64,
        ModuleKeyword = 65,
        RequireKeyword = 66,
        NumberKeyword = 67,
        SetKeyword = 68,
        StringKeyword = 69,
        OpenBraceToken = 70,
        CloseBraceToken = 71,
        OpenParenToken = 72,
        CloseParenToken = 73,
        OpenBracketToken = 74,
        CloseBracketToken = 75,
        DotToken = 76,
        DotDotDotToken = 77,
        SemicolonToken = 78,
        CommaToken = 79,
        LessThanToken = 80,
        GreaterThanToken = 81,
        LessThanEqualsToken = 82,
        GreaterThanEqualsToken = 83,
        EqualsEqualsToken = 84,
        EqualsGreaterThanToken = 85,
        ExclamationEqualsToken = 86,
        EqualsEqualsEqualsToken = 87,
        ExclamationEqualsEqualsToken = 88,
        PlusToken = 89,
        MinusToken = 90,
        AsteriskToken = 91,
        PercentToken = 92,
        PlusPlusToken = 93,
        MinusMinusToken = 94,
        LessThanLessThanToken = 95,
        GreaterThanGreaterThanToken = 96,
        GreaterThanGreaterThanGreaterThanToken = 97,
        AmpersandToken = 98,
        BarToken = 99,
        CaretToken = 100,
        ExclamationToken = 101,
        TildeToken = 102,
        AmpersandAmpersandToken = 103,
        BarBarToken = 104,
        QuestionToken = 105,
        ColonToken = 106,
        EqualsToken = 107,
        PlusEqualsToken = 108,
        MinusEqualsToken = 109,
        AsteriskEqualsToken = 110,
        PercentEqualsToken = 111,
        LessThanLessThanEqualsToken = 112,
        GreaterThanGreaterThanEqualsToken = 113,
        GreaterThanGreaterThanGreaterThanEqualsToken = 114,
        AmpersandEqualsToken = 115,
        BarEqualsToken = 116,
        CaretEqualsToken = 117,
        SlashToken = 118,
        SlashEqualsToken = 119,
        SourceUnit = 120,
        QualifiedName = 121,
        ObjectType = 122,
        FunctionType = 123,
        ArrayType = 124,
        ConstructorType = 125,
        GenericType = 126,
        TypeQuery = 127,
        TupleType = 128,
        InterfaceDeclaration = 129,
        FunctionDeclaration = 130,
        ModuleDeclaration = 131,
        ClassDeclaration = 132,
        EnumDeclaration = 133,
        ImportDeclaration = 134,
        ExportAssignment = 135,
        MemberFunctionDeclaration = 136,
        MemberVariableDeclaration = 137,
        ConstructorDeclaration = 138,
        IndexMemberDeclaration = 139,
        GetAccessor = 140,
        SetAccessor = 141,
        PropertySignature = 142,
        CallSignature = 143,
        ConstructSignature = 144,
        IndexSignature = 145,
        MethodSignature = 146,
        Block = 147,
        IfStatement = 148,
        VariableStatement = 149,
        ExpressionStatement = 150,
        ReturnStatement = 151,
        SwitchStatement = 152,
        BreakStatement = 153,
        ContinueStatement = 154,
        ForStatement = 155,
        ForInStatement = 156,
        EmptyStatement = 157,
        ThrowStatement = 158,
        WhileStatement = 159,
        TryStatement = 160,
        LabeledStatement = 161,
        DoStatement = 162,
        DebuggerStatement = 163,
        WithStatement = 164,
        PlusExpression = 165,
        NegateExpression = 166,
        BitwiseNotExpression = 167,
        LogicalNotExpression = 168,
        PreIncrementExpression = 169,
        PreDecrementExpression = 170,
        DeleteExpression = 171,
        TypeOfExpression = 172,
        VoidExpression = 173,
        CommaExpression = 174,
        AssignmentExpression = 175,
        AddAssignmentExpression = 176,
        SubtractAssignmentExpression = 177,
        MultiplyAssignmentExpression = 178,
        DivideAssignmentExpression = 179,
        ModuloAssignmentExpression = 180,
        AndAssignmentExpression = 181,
        ExclusiveOrAssignmentExpression = 182,
        OrAssignmentExpression = 183,
        LeftShiftAssignmentExpression = 184,
        SignedRightShiftAssignmentExpression = 185,
        UnsignedRightShiftAssignmentExpression = 186,
        ConditionalExpression = 187,
        LogicalOrExpression = 188,
        LogicalAndExpression = 189,
        BitwiseOrExpression = 190,
        BitwiseExclusiveOrExpression = 191,
        BitwiseAndExpression = 192,
        EqualsWithTypeConversionExpression = 193,
        NotEqualsWithTypeConversionExpression = 194,
        EqualsExpression = 195,
        NotEqualsExpression = 196,
        LessThanExpression = 197,
        GreaterThanExpression = 198,
        LessThanOrEqualExpression = 199,
        GreaterThanOrEqualExpression = 200,
        InstanceOfExpression = 201,
        InExpression = 202,
        LeftShiftExpression = 203,
        SignedRightShiftExpression = 204,
        UnsignedRightShiftExpression = 205,
        MultiplyExpression = 206,
        DivideExpression = 207,
        ModuloExpression = 208,
        AddExpression = 209,
        SubtractExpression = 210,
        PostIncrementExpression = 211,
        PostDecrementExpression = 212,
        MemberAccessExpression = 213,
        InvocationExpression = 214,
        ArrayLiteralExpression = 215,
        ObjectLiteralExpression = 216,
        ObjectCreationExpression = 217,
        ParenthesizedExpression = 218,
        ParenthesizedArrowFunctionExpression = 219,
        SimpleArrowFunctionExpression = 220,
        CastExpression = 221,
        ElementAccessExpression = 222,
        FunctionExpression = 223,
        OmittedExpression = 224,
        VariableDeclaration = 225,
        VariableDeclarator = 226,
        ArgumentList = 227,
        ParameterList = 228,
        TypeArgumentList = 229,
        TypeParameterList = 230,
        ExtendsHeritageClause = 231,
        ImplementsHeritageClause = 232,
        EqualsValueClause = 233,
        CaseSwitchClause = 234,
        DefaultSwitchClause = 235,
        ElseClause = 236,
        CatchClause = 237,
        FinallyClause = 238,
        TypeParameter = 239,
        Constraint = 240,
        SimplePropertyAssignment = 241,
        FunctionPropertyAssignment = 242,
        Parameter = 243,
        EnumElement = 244,
        TypeAnnotation = 245,
        ExternalModuleReference = 246,
        ModuleNameModuleReference = 247,
        FirstStandardKeyword,
        LastStandardKeyword,
        FirstFutureReservedKeyword,
        LastFutureReservedKeyword,
        FirstFutureReservedStrictKeyword,
        LastFutureReservedStrictKeyword,
        FirstTypeScriptKeyword,
        LastTypeScriptKeyword,
        FirstKeyword,
        LastKeyword,
        FirstToken,
        LastToken,
        FirstPunctuation,
        LastPunctuation,
        FirstFixedWidth,
        LastFixedWidth,
        FirstTrivia,
        LastTrivia,
        FirstNode,
        LastNode,
    }
}
declare module TypeScript.SyntaxFacts {
    function getTokenKind(text: string): SyntaxKind;
    function getText(kind: SyntaxKind): string;
    function isAnyKeyword(kind: SyntaxKind): boolean;
    function isAnyPunctuation(kind: SyntaxKind): boolean;
    function isPrefixUnaryExpressionOperatorToken(tokenKind: SyntaxKind): boolean;
    function isBinaryExpressionOperatorToken(tokenKind: SyntaxKind): boolean;
    function getPrefixUnaryExpressionFromOperatorToken(tokenKind: SyntaxKind): SyntaxKind;
    function getPostfixUnaryExpressionFromOperatorToken(tokenKind: SyntaxKind): SyntaxKind;
    function getBinaryExpressionFromOperatorToken(tokenKind: SyntaxKind): SyntaxKind;
    function getOperatorTokenFromBinaryExpression(tokenKind: SyntaxKind): SyntaxKind;
    function isAssignmentOperatorToken(tokenKind: SyntaxKind): boolean;
    function isType(kind: SyntaxKind): boolean;
}
declare module TypeScript.Scanner {
    function isContextualToken(token: ISyntaxToken): boolean;
    interface DiagnosticCallback {
        (position: number, width: number, key: string, arguments: any[]): void;
    }
    interface IScanner {
        setIndex(index: number): void;
        scan(allowContextualToken: boolean): ISyntaxToken;
    }
    function createScanner(languageVersion: ts.ScriptTarget, text: ISimpleText, reportDiagnostic: DiagnosticCallback): IScanner;
    function isValidIdentifier(text: ISimpleText, languageVersion: ts.ScriptTarget): boolean;
    interface IScannerParserSource extends Parser.IParserSource {
        absolutePosition(): number;
        resetToPosition(absolutePosition: number): void;
    }
    function createParserSource(fileName: string, text: ISimpleText, languageVersion: ts.ScriptTarget): IScannerParserSource;
}
declare module TypeScript {
    class ScannerUtilities {
        static identifierKind(str: string, start: number, length: number): SyntaxKind;
    }
}
declare module TypeScript {
    interface ISlidingWindowSource {
        (argument: any): any;
    }
    class SlidingWindow {
        private fetchNextItem;
        window: any[];
        private defaultValue;
        private sourceLength;
        windowCount: number;
        windowAbsoluteStartIndex: number;
        currentRelativeItemIndex: number;
        private _pinCount;
        private firstPinnedAbsoluteIndex;
        constructor(fetchNextItem: ISlidingWindowSource, window: any[], defaultValue: any, sourceLength?: number);
        private addMoreItemsToWindow(argument);
        private tryShiftOrGrowWindow();
        absoluteIndex(): number;
        isAtEndOfSource(): boolean;
        getAndPinAbsoluteIndex(): number;
        releaseAndUnpinAbsoluteIndex(absoluteIndex: number): void;
        rewindToPinnedIndex(absoluteIndex: number): void;
        currentItem(argument: any): any;
        peekItemN(n: number): any;
        moveToNextItem(): void;
        disgardAllItemsFromCurrentIndexOnwards(): void;
    }
}
declare module TypeScript.Syntax {
    var _nextSyntaxID: number;
    function childIndex(parent: ISyntaxElement, child: ISyntaxElement): number;
    function nodeHasSkippedOrMissingTokens(node: ISyntaxNode): boolean;
    function isUnterminatedStringLiteral(token: ISyntaxToken): boolean;
    function isUnterminatedMultilineCommentTrivia(trivia: ISyntaxTrivia): boolean;
    function isEntirelyInsideCommentTrivia(trivia: ISyntaxTrivia, fullStart: number, position: number): boolean;
    function isEntirelyInsideComment(sourceUnit: SourceUnitSyntax, position: number): boolean;
    function isEntirelyInStringOrRegularExpressionLiteral(sourceUnit: SourceUnitSyntax, position: number): boolean;
    function findSkippedTokenOnLeft(positionedToken: ISyntaxToken, position: number): ISyntaxToken;
    function getAncestorOfKind(positionedToken: ISyntaxElement, kind: SyntaxKind): ISyntaxElement;
    function hasAncestorOfKind(positionedToken: ISyntaxElement, kind: SyntaxKind): boolean;
    function isIntegerLiteral(expression: IExpressionSyntax): boolean;
    function containingNode(element: ISyntaxElement): ISyntaxNode;
    function findTokenOnLeft(element: ISyntaxElement, position: number, includeSkippedTokens?: boolean): ISyntaxToken;
    function findCompleteTokenOnLeft(element: ISyntaxElement, position: number, includeSkippedTokens?: boolean): ISyntaxToken;
    function firstTokenInLineContainingPosition(syntaxTree: SyntaxTree, position: number): ISyntaxToken;
}
declare module TypeScript {
    function isShared(element: ISyntaxElement): boolean;
    function childCount(element: ISyntaxElement): number;
    function childAt(element: ISyntaxElement, index: number): ISyntaxElement;
    function syntaxTree(element: ISyntaxElement): SyntaxTree;
    function parsedInStrictMode(node: ISyntaxNode): boolean;
    function previousToken(token: ISyntaxToken, includeSkippedTokens?: boolean): ISyntaxToken;
    function findToken(element: ISyntaxElement, position: number, includeSkippedTokens?: boolean): ISyntaxToken;
    function findSkippedTokenInPositionedToken(positionedToken: ISyntaxToken, position: number): ISyntaxToken;
    function findSkippedTokenInLeadingTriviaList(positionedToken: ISyntaxToken, position: number): ISyntaxToken;
    function findSkippedTokenInTrailingTriviaList(positionedToken: ISyntaxToken, position: number): ISyntaxToken;
    function nextToken(token: ISyntaxToken, text?: ISimpleText, includeSkippedTokens?: boolean): ISyntaxToken;
    function isNode(element: ISyntaxElement): boolean;
    function isToken(element: ISyntaxElement): boolean;
    function isList(element: ISyntaxElement): boolean;
    function isSeparatedList(element: ISyntaxElement): boolean;
    function syntaxID(element: ISyntaxElement): number;
    function fullText(element: ISyntaxElement, text?: ISimpleText): string;
    function leadingTriviaWidth(element: ISyntaxElement, text?: ISimpleText): number;
    function trailingTriviaWidth(element: ISyntaxElement, text?: ISimpleText): number;
    function firstToken(element: ISyntaxElement): ISyntaxToken;
    function lastToken(element: ISyntaxElement): ISyntaxToken;
    function fullStart(element: ISyntaxElement): number;
    function fullWidth(element: ISyntaxElement): number;
    function isIncrementallyUnusable(element: ISyntaxElement): boolean;
    function start(element: ISyntaxElement, text?: ISimpleText): number;
    function end(element: ISyntaxElement, text?: ISimpleText): number;
    function width(element: ISyntaxElement, text?: ISimpleText): number;
    function fullEnd(element: ISyntaxElement): number;
    function existsNewLineBetweenTokens(token1: ISyntaxToken, token2: ISyntaxToken, text: ISimpleText): boolean;
    interface ISyntaxElement {
        kind(): SyntaxKind;
        parent?: ISyntaxElement;
    }
    interface ISyntaxNode extends ISyntaxNodeOrToken {
        data: number;
    }
    interface IModuleReferenceSyntax extends ISyntaxNode {
        _moduleReferenceBrand: any;
    }
    interface IModuleElementSyntax extends ISyntaxNode {
    }
    interface IStatementSyntax extends IModuleElementSyntax {
        _statementBrand: any;
    }
    interface ITypeMemberSyntax extends ISyntaxNode {
    }
    interface IClassElementSyntax extends ISyntaxNode {
    }
    interface IMemberDeclarationSyntax extends IClassElementSyntax {
    }
    interface IPropertyAssignmentSyntax extends IClassElementSyntax {
    }
    interface ISwitchClauseSyntax extends ISyntaxNode {
        _switchClauseBrand: any;
        statements: IStatementSyntax[];
    }
    interface IExpressionSyntax extends ISyntaxNodeOrToken {
        _expressionBrand: any;
    }
    interface IUnaryExpressionSyntax extends IExpressionSyntax {
        _unaryExpressionBrand: any;
    }
    interface IPostfixExpressionSyntax extends IUnaryExpressionSyntax {
        _postfixExpressionBrand: any;
    }
    interface ILeftHandSideExpressionSyntax extends IPostfixExpressionSyntax {
        _leftHandSideExpressionBrand: any;
    }
    interface IMemberExpressionSyntax extends ILeftHandSideExpressionSyntax {
        _memberExpressionBrand: any;
    }
    interface ICallExpressionSyntax extends ILeftHandSideExpressionSyntax {
        _callExpressionBrand: any;
        expression: IExpressionSyntax;
    }
    interface IPrimaryExpressionSyntax extends IMemberExpressionSyntax {
        _primaryExpressionBrand: any;
    }
    interface ITypeSyntax extends ISyntaxNodeOrToken {
        _typeBrand: any;
    }
    interface INameSyntax extends ITypeSyntax {
    }
}
declare module TypeScript.SyntaxFacts {
    function isDirectivePrologueElement(node: ISyntaxNodeOrToken): boolean;
    function isUseStrictDirective(node: ISyntaxNodeOrToken): boolean;
    function isIdentifierNameOrAnyKeyword(token: ISyntaxToken): boolean;
    function isAccessibilityModifier(kind: SyntaxKind): boolean;
}
interface Array<T> {
    data: number;
    separators?: TypeScript.ISyntaxToken[];
    kind(): TypeScript.SyntaxKind;
    parent: TypeScript.ISyntaxElement;
    separatorCount(): number;
    separatorAt(index: number): TypeScript.ISyntaxToken;
}
declare module TypeScript.Syntax {
    function emptyList<T extends ISyntaxNodeOrToken>(): T[];
    function emptySeparatedList<T extends ISyntaxNodeOrToken>(): T[];
    function list<T extends ISyntaxNodeOrToken>(nodes: T[]): T[];
    function separatedList<T extends ISyntaxNodeOrToken>(nodes: T[], separators: ISyntaxToken[]): T[];
    function nonSeparatorIndexOf<T extends ISyntaxNodeOrToken>(list: T[], ast: ISyntaxNodeOrToken): number;
}
declare module TypeScript {
    class SyntaxNode implements ISyntaxNodeOrToken {
        private __kind;
        data: number;
        parent: ISyntaxElement;
        constructor(data: number);
        kind(): SyntaxKind;
    }
}
declare module TypeScript {
    interface ISyntaxNodeOrToken extends ISyntaxElement {
    }
}
declare module TypeScript {
    interface SourceUnitSyntax extends ISyntaxNode {
        syntaxTree: SyntaxTree;
        moduleElements: IModuleElementSyntax[];
        endOfFileToken: ISyntaxToken;
    }
    interface QualifiedNameSyntax extends ISyntaxNode, INameSyntax {
        left: INameSyntax;
        dotToken: ISyntaxToken;
        right: ISyntaxToken;
    }
    interface ObjectTypeSyntax extends ISyntaxNode, ITypeSyntax {
        openBraceToken: ISyntaxToken;
        typeMembers: ITypeMemberSyntax[];
        closeBraceToken: ISyntaxToken;
    }
    interface FunctionTypeSyntax extends ISyntaxNode, ITypeSyntax {
        typeParameterList: TypeParameterListSyntax;
        parameterList: ParameterListSyntax;
        equalsGreaterThanToken: ISyntaxToken;
        type: ITypeSyntax;
    }
    interface ArrayTypeSyntax extends ISyntaxNode, ITypeSyntax {
        type: ITypeSyntax;
        openBracketToken: ISyntaxToken;
        closeBracketToken: ISyntaxToken;
    }
    interface ConstructorTypeSyntax extends ISyntaxNode, ITypeSyntax {
        newKeyword: ISyntaxToken;
        typeParameterList: TypeParameterListSyntax;
        parameterList: ParameterListSyntax;
        equalsGreaterThanToken: ISyntaxToken;
        type: ITypeSyntax;
    }
    interface GenericTypeSyntax extends ISyntaxNode, ITypeSyntax {
        name: INameSyntax;
        typeArgumentList: TypeArgumentListSyntax;
    }
    interface TypeQuerySyntax extends ISyntaxNode, ITypeSyntax {
        typeOfKeyword: ISyntaxToken;
        name: INameSyntax;
    }
    interface TupleTypeSyntax extends ISyntaxNode, ITypeSyntax {
        openBracketToken: ISyntaxToken;
        types: ITypeSyntax[];
        closeBracketToken: ISyntaxToken;
    }
    interface InterfaceDeclarationSyntax extends ISyntaxNode, IModuleElementSyntax {
        modifiers: ISyntaxToken[];
        interfaceKeyword: ISyntaxToken;
        identifier: ISyntaxToken;
        typeParameterList: TypeParameterListSyntax;
        heritageClauses: HeritageClauseSyntax[];
        body: ObjectTypeSyntax;
    }
    interface FunctionDeclarationSyntax extends ISyntaxNode, IStatementSyntax {
        modifiers: ISyntaxToken[];
        functionKeyword: ISyntaxToken;
        identifier: ISyntaxToken;
        callSignature: CallSignatureSyntax;
        block: BlockSyntax;
        semicolonToken: ISyntaxToken;
    }
    interface ModuleDeclarationSyntax extends ISyntaxNode, IModuleElementSyntax {
        modifiers: ISyntaxToken[];
        moduleKeyword: ISyntaxToken;
        name: INameSyntax;
        stringLiteral: ISyntaxToken;
        openBraceToken: ISyntaxToken;
        moduleElements: IModuleElementSyntax[];
        closeBraceToken: ISyntaxToken;
    }
    interface ClassDeclarationSyntax extends ISyntaxNode, IModuleElementSyntax {
        modifiers: ISyntaxToken[];
        classKeyword: ISyntaxToken;
        identifier: ISyntaxToken;
        typeParameterList: TypeParameterListSyntax;
        heritageClauses: HeritageClauseSyntax[];
        openBraceToken: ISyntaxToken;
        classElements: IClassElementSyntax[];
        closeBraceToken: ISyntaxToken;
    }
    interface EnumDeclarationSyntax extends ISyntaxNode, IModuleElementSyntax {
        modifiers: ISyntaxToken[];
        enumKeyword: ISyntaxToken;
        identifier: ISyntaxToken;
        openBraceToken: ISyntaxToken;
        enumElements: EnumElementSyntax[];
        closeBraceToken: ISyntaxToken;
    }
    interface ImportDeclarationSyntax extends ISyntaxNode, IModuleElementSyntax {
        modifiers: ISyntaxToken[];
        importKeyword: ISyntaxToken;
        identifier: ISyntaxToken;
        equalsToken: ISyntaxToken;
        moduleReference: IModuleReferenceSyntax;
        semicolonToken: ISyntaxToken;
    }
    interface ExportAssignmentSyntax extends ISyntaxNode, IModuleElementSyntax {
        exportKeyword: ISyntaxToken;
        equalsToken: ISyntaxToken;
        identifier: ISyntaxToken;
        semicolonToken: ISyntaxToken;
    }
    interface MemberFunctionDeclarationSyntax extends ISyntaxNode, IMemberDeclarationSyntax {
        modifiers: ISyntaxToken[];
        propertyName: ISyntaxToken;
        callSignature: CallSignatureSyntax;
        block: BlockSyntax;
        semicolonToken: ISyntaxToken;
    }
    interface MemberVariableDeclarationSyntax extends ISyntaxNode, IMemberDeclarationSyntax {
        modifiers: ISyntaxToken[];
        variableDeclarator: VariableDeclaratorSyntax;
        semicolonToken: ISyntaxToken;
    }
    interface ConstructorDeclarationSyntax extends ISyntaxNode, IClassElementSyntax {
        modifiers: ISyntaxToken[];
        constructorKeyword: ISyntaxToken;
        callSignature: CallSignatureSyntax;
        block: BlockSyntax;
        semicolonToken: ISyntaxToken;
    }
    interface IndexMemberDeclarationSyntax extends ISyntaxNode, IClassElementSyntax {
        modifiers: ISyntaxToken[];
        indexSignature: IndexSignatureSyntax;
        semicolonToken: ISyntaxToken;
    }
    interface GetAccessorSyntax extends ISyntaxNode, IMemberDeclarationSyntax, IPropertyAssignmentSyntax {
        modifiers: ISyntaxToken[];
        getKeyword: ISyntaxToken;
        propertyName: ISyntaxToken;
        callSignature: CallSignatureSyntax;
        block: BlockSyntax;
    }
    interface SetAccessorSyntax extends ISyntaxNode, IMemberDeclarationSyntax, IPropertyAssignmentSyntax {
        modifiers: ISyntaxToken[];
        setKeyword: ISyntaxToken;
        propertyName: ISyntaxToken;
        callSignature: CallSignatureSyntax;
        block: BlockSyntax;
    }
    interface PropertySignatureSyntax extends ISyntaxNode, ITypeMemberSyntax {
        propertyName: ISyntaxToken;
        questionToken: ISyntaxToken;
        typeAnnotation: TypeAnnotationSyntax;
    }
    interface CallSignatureSyntax extends ISyntaxNode, ITypeMemberSyntax {
        typeParameterList: TypeParameterListSyntax;
        parameterList: ParameterListSyntax;
        typeAnnotation: TypeAnnotationSyntax;
    }
    interface ConstructSignatureSyntax extends ISyntaxNode, ITypeMemberSyntax {
        newKeyword: ISyntaxToken;
        callSignature: CallSignatureSyntax;
    }
    interface IndexSignatureSyntax extends ISyntaxNode, ITypeMemberSyntax {
        openBracketToken: ISyntaxToken;
        parameters: ParameterSyntax[];
        closeBracketToken: ISyntaxToken;
        typeAnnotation: TypeAnnotationSyntax;
    }
    interface MethodSignatureSyntax extends ISyntaxNode, ITypeMemberSyntax {
        propertyName: ISyntaxToken;
        questionToken: ISyntaxToken;
        callSignature: CallSignatureSyntax;
    }
    interface BlockSyntax extends ISyntaxNode, IStatementSyntax {
        openBraceToken: ISyntaxToken;
        statements: IStatementSyntax[];
        closeBraceToken: ISyntaxToken;
    }
    interface IfStatementSyntax extends ISyntaxNode, IStatementSyntax {
        ifKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        condition: IExpressionSyntax;
        closeParenToken: ISyntaxToken;
        statement: IStatementSyntax;
        elseClause: ElseClauseSyntax;
    }
    interface VariableStatementSyntax extends ISyntaxNode, IStatementSyntax {
        modifiers: ISyntaxToken[];
        variableDeclaration: VariableDeclarationSyntax;
        semicolonToken: ISyntaxToken;
    }
    interface ExpressionStatementSyntax extends ISyntaxNode, IStatementSyntax {
        expression: IExpressionSyntax;
        semicolonToken: ISyntaxToken;
    }
    interface ReturnStatementSyntax extends ISyntaxNode, IStatementSyntax {
        returnKeyword: ISyntaxToken;
        expression: IExpressionSyntax;
        semicolonToken: ISyntaxToken;
    }
    interface SwitchStatementSyntax extends ISyntaxNode, IStatementSyntax {
        switchKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        expression: IExpressionSyntax;
        closeParenToken: ISyntaxToken;
        openBraceToken: ISyntaxToken;
        switchClauses: ISwitchClauseSyntax[];
        closeBraceToken: ISyntaxToken;
    }
    interface BreakStatementSyntax extends ISyntaxNode, IStatementSyntax {
        breakKeyword: ISyntaxToken;
        identifier: ISyntaxToken;
        semicolonToken: ISyntaxToken;
    }
    interface ContinueStatementSyntax extends ISyntaxNode, IStatementSyntax {
        continueKeyword: ISyntaxToken;
        identifier: ISyntaxToken;
        semicolonToken: ISyntaxToken;
    }
    interface ForStatementSyntax extends ISyntaxNode, IStatementSyntax {
        forKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        variableDeclaration: VariableDeclarationSyntax;
        initializer: IExpressionSyntax;
        firstSemicolonToken: ISyntaxToken;
        condition: IExpressionSyntax;
        secondSemicolonToken: ISyntaxToken;
        incrementor: IExpressionSyntax;
        closeParenToken: ISyntaxToken;
        statement: IStatementSyntax;
    }
    interface ForInStatementSyntax extends ISyntaxNode, IStatementSyntax {
        forKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        variableDeclaration: VariableDeclarationSyntax;
        left: IExpressionSyntax;
        inKeyword: ISyntaxToken;
        expression: IExpressionSyntax;
        closeParenToken: ISyntaxToken;
        statement: IStatementSyntax;
    }
    interface EmptyStatementSyntax extends ISyntaxNode, IStatementSyntax {
        semicolonToken: ISyntaxToken;
    }
    interface ThrowStatementSyntax extends ISyntaxNode, IStatementSyntax {
        throwKeyword: ISyntaxToken;
        expression: IExpressionSyntax;
        semicolonToken: ISyntaxToken;
    }
    interface WhileStatementSyntax extends ISyntaxNode, IStatementSyntax {
        whileKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        condition: IExpressionSyntax;
        closeParenToken: ISyntaxToken;
        statement: IStatementSyntax;
    }
    interface TryStatementSyntax extends ISyntaxNode, IStatementSyntax {
        tryKeyword: ISyntaxToken;
        block: BlockSyntax;
        catchClause: CatchClauseSyntax;
        finallyClause: FinallyClauseSyntax;
    }
    interface LabeledStatementSyntax extends ISyntaxNode, IStatementSyntax {
        identifier: ISyntaxToken;
        colonToken: ISyntaxToken;
        statement: IStatementSyntax;
    }
    interface DoStatementSyntax extends ISyntaxNode, IStatementSyntax {
        doKeyword: ISyntaxToken;
        statement: IStatementSyntax;
        whileKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        condition: IExpressionSyntax;
        closeParenToken: ISyntaxToken;
        semicolonToken: ISyntaxToken;
    }
    interface DebuggerStatementSyntax extends ISyntaxNode, IStatementSyntax {
        debuggerKeyword: ISyntaxToken;
        semicolonToken: ISyntaxToken;
    }
    interface WithStatementSyntax extends ISyntaxNode, IStatementSyntax {
        withKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        condition: IExpressionSyntax;
        closeParenToken: ISyntaxToken;
        statement: IStatementSyntax;
    }
    interface PrefixUnaryExpressionSyntax extends ISyntaxNode, IUnaryExpressionSyntax {
        operatorToken: ISyntaxToken;
        operand: IUnaryExpressionSyntax;
    }
    interface DeleteExpressionSyntax extends ISyntaxNode, IUnaryExpressionSyntax {
        deleteKeyword: ISyntaxToken;
        expression: IUnaryExpressionSyntax;
    }
    interface TypeOfExpressionSyntax extends ISyntaxNode, IUnaryExpressionSyntax {
        typeOfKeyword: ISyntaxToken;
        expression: IUnaryExpressionSyntax;
    }
    interface VoidExpressionSyntax extends ISyntaxNode, IUnaryExpressionSyntax {
        voidKeyword: ISyntaxToken;
        expression: IUnaryExpressionSyntax;
    }
    interface ConditionalExpressionSyntax extends ISyntaxNode, IExpressionSyntax {
        condition: IExpressionSyntax;
        questionToken: ISyntaxToken;
        whenTrue: IExpressionSyntax;
        colonToken: ISyntaxToken;
        whenFalse: IExpressionSyntax;
    }
    interface BinaryExpressionSyntax extends ISyntaxNode, IExpressionSyntax {
        left: IExpressionSyntax;
        operatorToken: ISyntaxToken;
        right: IExpressionSyntax;
    }
    interface PostfixUnaryExpressionSyntax extends ISyntaxNode, IPostfixExpressionSyntax {
        operand: ILeftHandSideExpressionSyntax;
        operatorToken: ISyntaxToken;
    }
    interface MemberAccessExpressionSyntax extends ISyntaxNode, IMemberExpressionSyntax, ICallExpressionSyntax {
        expression: ILeftHandSideExpressionSyntax;
        dotToken: ISyntaxToken;
        name: ISyntaxToken;
    }
    interface InvocationExpressionSyntax extends ISyntaxNode, ICallExpressionSyntax {
        expression: ILeftHandSideExpressionSyntax;
        argumentList: ArgumentListSyntax;
    }
    interface ArrayLiteralExpressionSyntax extends ISyntaxNode, IPrimaryExpressionSyntax {
        openBracketToken: ISyntaxToken;
        expressions: IExpressionSyntax[];
        closeBracketToken: ISyntaxToken;
    }
    interface ObjectLiteralExpressionSyntax extends ISyntaxNode, IPrimaryExpressionSyntax {
        openBraceToken: ISyntaxToken;
        propertyAssignments: IPropertyAssignmentSyntax[];
        closeBraceToken: ISyntaxToken;
    }
    interface ObjectCreationExpressionSyntax extends ISyntaxNode, IPrimaryExpressionSyntax {
        newKeyword: ISyntaxToken;
        expression: IMemberExpressionSyntax;
        argumentList: ArgumentListSyntax;
    }
    interface ParenthesizedExpressionSyntax extends ISyntaxNode, IPrimaryExpressionSyntax {
        openParenToken: ISyntaxToken;
        expression: IExpressionSyntax;
        closeParenToken: ISyntaxToken;
    }
    interface ParenthesizedArrowFunctionExpressionSyntax extends ISyntaxNode, IUnaryExpressionSyntax {
        callSignature: CallSignatureSyntax;
        equalsGreaterThanToken: ISyntaxToken;
        block: BlockSyntax;
        expression: IExpressionSyntax;
    }
    interface SimpleArrowFunctionExpressionSyntax extends ISyntaxNode, IUnaryExpressionSyntax {
        parameter: ParameterSyntax;
        equalsGreaterThanToken: ISyntaxToken;
        block: BlockSyntax;
        expression: IExpressionSyntax;
    }
    interface CastExpressionSyntax extends ISyntaxNode, IUnaryExpressionSyntax {
        lessThanToken: ISyntaxToken;
        type: ITypeSyntax;
        greaterThanToken: ISyntaxToken;
        expression: IUnaryExpressionSyntax;
    }
    interface ElementAccessExpressionSyntax extends ISyntaxNode, IMemberExpressionSyntax, ICallExpressionSyntax {
        expression: ILeftHandSideExpressionSyntax;
        openBracketToken: ISyntaxToken;
        argumentExpression: IExpressionSyntax;
        closeBracketToken: ISyntaxToken;
    }
    interface FunctionExpressionSyntax extends ISyntaxNode, IPrimaryExpressionSyntax {
        functionKeyword: ISyntaxToken;
        identifier: ISyntaxToken;
        callSignature: CallSignatureSyntax;
        block: BlockSyntax;
    }
    interface OmittedExpressionSyntax extends ISyntaxNode, IExpressionSyntax {
    }
    interface VariableDeclarationSyntax extends ISyntaxNode {
        varKeyword: ISyntaxToken;
        variableDeclarators: VariableDeclaratorSyntax[];
    }
    interface VariableDeclaratorSyntax extends ISyntaxNode {
        propertyName: ISyntaxToken;
        typeAnnotation: TypeAnnotationSyntax;
        equalsValueClause: EqualsValueClauseSyntax;
    }
    interface ArgumentListSyntax extends ISyntaxNode {
        typeArgumentList: TypeArgumentListSyntax;
        openParenToken: ISyntaxToken;
        arguments: IExpressionSyntax[];
        closeParenToken: ISyntaxToken;
    }
    interface ParameterListSyntax extends ISyntaxNode {
        openParenToken: ISyntaxToken;
        parameters: ParameterSyntax[];
        closeParenToken: ISyntaxToken;
    }
    interface TypeArgumentListSyntax extends ISyntaxNode {
        lessThanToken: ISyntaxToken;
        typeArguments: ITypeSyntax[];
        greaterThanToken: ISyntaxToken;
    }
    interface TypeParameterListSyntax extends ISyntaxNode {
        lessThanToken: ISyntaxToken;
        typeParameters: TypeParameterSyntax[];
        greaterThanToken: ISyntaxToken;
    }
    interface HeritageClauseSyntax extends ISyntaxNode {
        extendsOrImplementsKeyword: ISyntaxToken;
        typeNames: INameSyntax[];
    }
    interface EqualsValueClauseSyntax extends ISyntaxNode {
        equalsToken: ISyntaxToken;
        value: IExpressionSyntax;
    }
    interface CaseSwitchClauseSyntax extends ISyntaxNode, ISwitchClauseSyntax {
        caseKeyword: ISyntaxToken;
        expression: IExpressionSyntax;
        colonToken: ISyntaxToken;
        statements: IStatementSyntax[];
    }
    interface DefaultSwitchClauseSyntax extends ISyntaxNode, ISwitchClauseSyntax {
        defaultKeyword: ISyntaxToken;
        colonToken: ISyntaxToken;
        statements: IStatementSyntax[];
    }
    interface ElseClauseSyntax extends ISyntaxNode {
        elseKeyword: ISyntaxToken;
        statement: IStatementSyntax;
    }
    interface CatchClauseSyntax extends ISyntaxNode {
        catchKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        identifier: ISyntaxToken;
        typeAnnotation: TypeAnnotationSyntax;
        closeParenToken: ISyntaxToken;
        block: BlockSyntax;
    }
    interface FinallyClauseSyntax extends ISyntaxNode {
        finallyKeyword: ISyntaxToken;
        block: BlockSyntax;
    }
    interface TypeParameterSyntax extends ISyntaxNode {
        identifier: ISyntaxToken;
        constraint: ConstraintSyntax;
    }
    interface ConstraintSyntax extends ISyntaxNode {
        extendsKeyword: ISyntaxToken;
        typeOrExpression: ISyntaxNodeOrToken;
    }
    interface SimplePropertyAssignmentSyntax extends ISyntaxNode, IPropertyAssignmentSyntax {
        propertyName: ISyntaxToken;
        colonToken: ISyntaxToken;
        expression: IExpressionSyntax;
    }
    interface FunctionPropertyAssignmentSyntax extends ISyntaxNode, IPropertyAssignmentSyntax {
        propertyName: ISyntaxToken;
        callSignature: CallSignatureSyntax;
        block: BlockSyntax;
    }
    interface ParameterSyntax extends ISyntaxNode {
        dotDotDotToken: ISyntaxToken;
        modifiers: ISyntaxToken[];
        identifier: ISyntaxToken;
        questionToken: ISyntaxToken;
        typeAnnotation: TypeAnnotationSyntax;
        equalsValueClause: EqualsValueClauseSyntax;
    }
    interface EnumElementSyntax extends ISyntaxNode {
        propertyName: ISyntaxToken;
        equalsValueClause: EqualsValueClauseSyntax;
    }
    interface TypeAnnotationSyntax extends ISyntaxNode {
        colonToken: ISyntaxToken;
        type: ITypeSyntax;
    }
    interface ExternalModuleReferenceSyntax extends ISyntaxNode, IModuleReferenceSyntax {
        requireKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        stringLiteral: ISyntaxToken;
        closeParenToken: ISyntaxToken;
    }
    interface ModuleNameModuleReferenceSyntax extends ISyntaxNode, IModuleReferenceSyntax {
        moduleName: INameSyntax;
    }
    var nodeMetadata: string[][];
    module Syntax {
        interface ISyntaxFactory {
            isConcrete: boolean;
            SourceUnitSyntax: new (data: number, moduleElements: IModuleElementSyntax[], endOfFileToken: ISyntaxToken) => SourceUnitSyntax;
            QualifiedNameSyntax: new (data: number, left: INameSyntax, dotToken: ISyntaxToken, right: ISyntaxToken) => QualifiedNameSyntax;
            ObjectTypeSyntax: new (data: number, openBraceToken: ISyntaxToken, typeMembers: ITypeMemberSyntax[], closeBraceToken: ISyntaxToken) => ObjectTypeSyntax;
            FunctionTypeSyntax: new (data: number, typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax) => FunctionTypeSyntax;
            ArrayTypeSyntax: new (data: number, type: ITypeSyntax, openBracketToken: ISyntaxToken, closeBracketToken: ISyntaxToken) => ArrayTypeSyntax;
            ConstructorTypeSyntax: new (data: number, newKeyword: ISyntaxToken, typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax) => ConstructorTypeSyntax;
            GenericTypeSyntax: new (data: number, name: INameSyntax, typeArgumentList: TypeArgumentListSyntax) => GenericTypeSyntax;
            TypeQuerySyntax: new (data: number, typeOfKeyword: ISyntaxToken, name: INameSyntax) => TypeQuerySyntax;
            TupleTypeSyntax: new (data: number, openBracketToken: ISyntaxToken, types: ITypeSyntax[], closeBracketToken: ISyntaxToken) => TupleTypeSyntax;
            InterfaceDeclarationSyntax: new (data: number, modifiers: ISyntaxToken[], interfaceKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: HeritageClauseSyntax[], body: ObjectTypeSyntax) => InterfaceDeclarationSyntax;
            FunctionDeclarationSyntax: new (data: number, modifiers: ISyntaxToken[], functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken) => FunctionDeclarationSyntax;
            ModuleDeclarationSyntax: new (data: number, modifiers: ISyntaxToken[], moduleKeyword: ISyntaxToken, name: INameSyntax, stringLiteral: ISyntaxToken, openBraceToken: ISyntaxToken, moduleElements: IModuleElementSyntax[], closeBraceToken: ISyntaxToken) => ModuleDeclarationSyntax;
            ClassDeclarationSyntax: new (data: number, modifiers: ISyntaxToken[], classKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: HeritageClauseSyntax[], openBraceToken: ISyntaxToken, classElements: IClassElementSyntax[], closeBraceToken: ISyntaxToken) => ClassDeclarationSyntax;
            EnumDeclarationSyntax: new (data: number, modifiers: ISyntaxToken[], enumKeyword: ISyntaxToken, identifier: ISyntaxToken, openBraceToken: ISyntaxToken, enumElements: EnumElementSyntax[], closeBraceToken: ISyntaxToken) => EnumDeclarationSyntax;
            ImportDeclarationSyntax: new (data: number, modifiers: ISyntaxToken[], importKeyword: ISyntaxToken, identifier: ISyntaxToken, equalsToken: ISyntaxToken, moduleReference: IModuleReferenceSyntax, semicolonToken: ISyntaxToken) => ImportDeclarationSyntax;
            ExportAssignmentSyntax: new (data: number, exportKeyword: ISyntaxToken, equalsToken: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken) => ExportAssignmentSyntax;
            MemberFunctionDeclarationSyntax: new (data: number, modifiers: ISyntaxToken[], propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken) => MemberFunctionDeclarationSyntax;
            MemberVariableDeclarationSyntax: new (data: number, modifiers: ISyntaxToken[], variableDeclarator: VariableDeclaratorSyntax, semicolonToken: ISyntaxToken) => MemberVariableDeclarationSyntax;
            ConstructorDeclarationSyntax: new (data: number, modifiers: ISyntaxToken[], constructorKeyword: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken) => ConstructorDeclarationSyntax;
            IndexMemberDeclarationSyntax: new (data: number, modifiers: ISyntaxToken[], indexSignature: IndexSignatureSyntax, semicolonToken: ISyntaxToken) => IndexMemberDeclarationSyntax;
            GetAccessorSyntax: new (data: number, modifiers: ISyntaxToken[], getKeyword: ISyntaxToken, propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax) => GetAccessorSyntax;
            SetAccessorSyntax: new (data: number, modifiers: ISyntaxToken[], setKeyword: ISyntaxToken, propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax) => SetAccessorSyntax;
            PropertySignatureSyntax: new (data: number, propertyName: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax) => PropertySignatureSyntax;
            CallSignatureSyntax: new (data: number, typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, typeAnnotation: TypeAnnotationSyntax) => CallSignatureSyntax;
            ConstructSignatureSyntax: new (data: number, newKeyword: ISyntaxToken, callSignature: CallSignatureSyntax) => ConstructSignatureSyntax;
            IndexSignatureSyntax: new (data: number, openBracketToken: ISyntaxToken, parameters: ParameterSyntax[], closeBracketToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax) => IndexSignatureSyntax;
            MethodSignatureSyntax: new (data: number, propertyName: ISyntaxToken, questionToken: ISyntaxToken, callSignature: CallSignatureSyntax) => MethodSignatureSyntax;
            BlockSyntax: new (data: number, openBraceToken: ISyntaxToken, statements: IStatementSyntax[], closeBraceToken: ISyntaxToken) => BlockSyntax;
            IfStatementSyntax: new (data: number, ifKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax, elseClause: ElseClauseSyntax) => IfStatementSyntax;
            VariableStatementSyntax: new (data: number, modifiers: ISyntaxToken[], variableDeclaration: VariableDeclarationSyntax, semicolonToken: ISyntaxToken) => VariableStatementSyntax;
            ExpressionStatementSyntax: new (data: number, expression: IExpressionSyntax, semicolonToken: ISyntaxToken) => ExpressionStatementSyntax;
            ReturnStatementSyntax: new (data: number, returnKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken) => ReturnStatementSyntax;
            SwitchStatementSyntax: new (data: number, switchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, openBraceToken: ISyntaxToken, switchClauses: ISwitchClauseSyntax[], closeBraceToken: ISyntaxToken) => SwitchStatementSyntax;
            BreakStatementSyntax: new (data: number, breakKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken) => BreakStatementSyntax;
            ContinueStatementSyntax: new (data: number, continueKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken) => ContinueStatementSyntax;
            ForStatementSyntax: new (data: number, forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, initializer: IExpressionSyntax, firstSemicolonToken: ISyntaxToken, condition: IExpressionSyntax, secondSemicolonToken: ISyntaxToken, incrementor: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax) => ForStatementSyntax;
            ForInStatementSyntax: new (data: number, forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, left: IExpressionSyntax, inKeyword: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax) => ForInStatementSyntax;
            EmptyStatementSyntax: new (data: number, semicolonToken: ISyntaxToken) => EmptyStatementSyntax;
            ThrowStatementSyntax: new (data: number, throwKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken) => ThrowStatementSyntax;
            WhileStatementSyntax: new (data: number, whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax) => WhileStatementSyntax;
            TryStatementSyntax: new (data: number, tryKeyword: ISyntaxToken, block: BlockSyntax, catchClause: CatchClauseSyntax, finallyClause: FinallyClauseSyntax) => TryStatementSyntax;
            LabeledStatementSyntax: new (data: number, identifier: ISyntaxToken, colonToken: ISyntaxToken, statement: IStatementSyntax) => LabeledStatementSyntax;
            DoStatementSyntax: new (data: number, doKeyword: ISyntaxToken, statement: IStatementSyntax, whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, semicolonToken: ISyntaxToken) => DoStatementSyntax;
            DebuggerStatementSyntax: new (data: number, debuggerKeyword: ISyntaxToken, semicolonToken: ISyntaxToken) => DebuggerStatementSyntax;
            WithStatementSyntax: new (data: number, withKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax) => WithStatementSyntax;
            PrefixUnaryExpressionSyntax: new (data: number, operatorToken: ISyntaxToken, operand: IUnaryExpressionSyntax) => PrefixUnaryExpressionSyntax;
            DeleteExpressionSyntax: new (data: number, deleteKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax) => DeleteExpressionSyntax;
            TypeOfExpressionSyntax: new (data: number, typeOfKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax) => TypeOfExpressionSyntax;
            VoidExpressionSyntax: new (data: number, voidKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax) => VoidExpressionSyntax;
            ConditionalExpressionSyntax: new (data: number, condition: IExpressionSyntax, questionToken: ISyntaxToken, whenTrue: IExpressionSyntax, colonToken: ISyntaxToken, whenFalse: IExpressionSyntax) => ConditionalExpressionSyntax;
            BinaryExpressionSyntax: new (data: number, left: IExpressionSyntax, operatorToken: ISyntaxToken, right: IExpressionSyntax) => BinaryExpressionSyntax;
            PostfixUnaryExpressionSyntax: new (data: number, operand: ILeftHandSideExpressionSyntax, operatorToken: ISyntaxToken) => PostfixUnaryExpressionSyntax;
            MemberAccessExpressionSyntax: new (data: number, expression: ILeftHandSideExpressionSyntax, dotToken: ISyntaxToken, name: ISyntaxToken) => MemberAccessExpressionSyntax;
            InvocationExpressionSyntax: new (data: number, expression: ILeftHandSideExpressionSyntax, argumentList: ArgumentListSyntax) => InvocationExpressionSyntax;
            ArrayLiteralExpressionSyntax: new (data: number, openBracketToken: ISyntaxToken, expressions: IExpressionSyntax[], closeBracketToken: ISyntaxToken) => ArrayLiteralExpressionSyntax;
            ObjectLiteralExpressionSyntax: new (data: number, openBraceToken: ISyntaxToken, propertyAssignments: IPropertyAssignmentSyntax[], closeBraceToken: ISyntaxToken) => ObjectLiteralExpressionSyntax;
            ObjectCreationExpressionSyntax: new (data: number, newKeyword: ISyntaxToken, expression: IMemberExpressionSyntax, argumentList: ArgumentListSyntax) => ObjectCreationExpressionSyntax;
            ParenthesizedExpressionSyntax: new (data: number, openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken) => ParenthesizedExpressionSyntax;
            ParenthesizedArrowFunctionExpressionSyntax: new (data: number, callSignature: CallSignatureSyntax, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax) => ParenthesizedArrowFunctionExpressionSyntax;
            SimpleArrowFunctionExpressionSyntax: new (data: number, parameter: ParameterSyntax, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax) => SimpleArrowFunctionExpressionSyntax;
            CastExpressionSyntax: new (data: number, lessThanToken: ISyntaxToken, type: ITypeSyntax, greaterThanToken: ISyntaxToken, expression: IUnaryExpressionSyntax) => CastExpressionSyntax;
            ElementAccessExpressionSyntax: new (data: number, expression: ILeftHandSideExpressionSyntax, openBracketToken: ISyntaxToken, argumentExpression: IExpressionSyntax, closeBracketToken: ISyntaxToken) => ElementAccessExpressionSyntax;
            FunctionExpressionSyntax: new (data: number, functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax) => FunctionExpressionSyntax;
            OmittedExpressionSyntax: new (data: number) => OmittedExpressionSyntax;
            VariableDeclarationSyntax: new (data: number, varKeyword: ISyntaxToken, variableDeclarators: VariableDeclaratorSyntax[]) => VariableDeclarationSyntax;
            VariableDeclaratorSyntax: new (data: number, propertyName: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax) => VariableDeclaratorSyntax;
            ArgumentListSyntax: new (data: number, typeArgumentList: TypeArgumentListSyntax, openParenToken: ISyntaxToken, arguments: IExpressionSyntax[], closeParenToken: ISyntaxToken) => ArgumentListSyntax;
            ParameterListSyntax: new (data: number, openParenToken: ISyntaxToken, parameters: ParameterSyntax[], closeParenToken: ISyntaxToken) => ParameterListSyntax;
            TypeArgumentListSyntax: new (data: number, lessThanToken: ISyntaxToken, typeArguments: ITypeSyntax[], greaterThanToken: ISyntaxToken) => TypeArgumentListSyntax;
            TypeParameterListSyntax: new (data: number, lessThanToken: ISyntaxToken, typeParameters: TypeParameterSyntax[], greaterThanToken: ISyntaxToken) => TypeParameterListSyntax;
            HeritageClauseSyntax: new (data: number, extendsOrImplementsKeyword: ISyntaxToken, typeNames: INameSyntax[]) => HeritageClauseSyntax;
            EqualsValueClauseSyntax: new (data: number, equalsToken: ISyntaxToken, value: IExpressionSyntax) => EqualsValueClauseSyntax;
            CaseSwitchClauseSyntax: new (data: number, caseKeyword: ISyntaxToken, expression: IExpressionSyntax, colonToken: ISyntaxToken, statements: IStatementSyntax[]) => CaseSwitchClauseSyntax;
            DefaultSwitchClauseSyntax: new (data: number, defaultKeyword: ISyntaxToken, colonToken: ISyntaxToken, statements: IStatementSyntax[]) => DefaultSwitchClauseSyntax;
            ElseClauseSyntax: new (data: number, elseKeyword: ISyntaxToken, statement: IStatementSyntax) => ElseClauseSyntax;
            CatchClauseSyntax: new (data: number, catchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, identifier: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, closeParenToken: ISyntaxToken, block: BlockSyntax) => CatchClauseSyntax;
            FinallyClauseSyntax: new (data: number, finallyKeyword: ISyntaxToken, block: BlockSyntax) => FinallyClauseSyntax;
            TypeParameterSyntax: new (data: number, identifier: ISyntaxToken, constraint: ConstraintSyntax) => TypeParameterSyntax;
            ConstraintSyntax: new (data: number, extendsKeyword: ISyntaxToken, typeOrExpression: ISyntaxNodeOrToken) => ConstraintSyntax;
            SimplePropertyAssignmentSyntax: new (data: number, propertyName: ISyntaxToken, colonToken: ISyntaxToken, expression: IExpressionSyntax) => SimplePropertyAssignmentSyntax;
            FunctionPropertyAssignmentSyntax: new (data: number, propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax) => FunctionPropertyAssignmentSyntax;
            ParameterSyntax: new (data: number, dotDotDotToken: ISyntaxToken, modifiers: ISyntaxToken[], identifier: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax) => ParameterSyntax;
            EnumElementSyntax: new (data: number, propertyName: ISyntaxToken, equalsValueClause: EqualsValueClauseSyntax) => EnumElementSyntax;
            TypeAnnotationSyntax: new (data: number, colonToken: ISyntaxToken, type: ITypeSyntax) => TypeAnnotationSyntax;
            ExternalModuleReferenceSyntax: new (data: number, requireKeyword: ISyntaxToken, openParenToken: ISyntaxToken, stringLiteral: ISyntaxToken, closeParenToken: ISyntaxToken) => ExternalModuleReferenceSyntax;
            ModuleNameModuleReferenceSyntax: new (data: number, moduleName: INameSyntax) => ModuleNameModuleReferenceSyntax;
        }
    }
}
declare module TypeScript {
    interface ISyntaxToken extends ISyntaxNodeOrToken, INameSyntax, IPrimaryExpressionSyntax {
        setFullStart(fullStart: number): void;
        fullStart(): number;
        fullWidth(): number;
        text(): string;
        fullText(text?: ISimpleText): string;
        hasLeadingTrivia(): boolean;
        hasTrailingTrivia(): boolean;
        hasLeadingComment(): boolean;
        hasTrailingComment(): boolean;
        hasSkippedToken(): boolean;
        leadingTrivia(text?: ISimpleText): ISyntaxTriviaList;
        trailingTrivia(text?: ISimpleText): ISyntaxTriviaList;
        leadingTriviaWidth(text?: ISimpleText): number;
        trailingTriviaWidth(text?: ISimpleText): number;
        isKeywordConvertedToIdentifier(): boolean;
        isIncrementallyUnusable(): boolean;
        clone(): ISyntaxToken;
    }
}
declare module TypeScript {
    function tokenValue(token: ISyntaxToken): any;
    function tokenValueText(token: ISyntaxToken): string;
    function massageEscapes(text: string): string;
}
declare module TypeScript.Syntax {
    function realizeToken(token: ISyntaxToken, text: ISimpleText): ISyntaxToken;
    function convertKeywordToIdentifier(token: ISyntaxToken): ISyntaxToken;
    function withLeadingTrivia(token: ISyntaxToken, leadingTrivia: ISyntaxTriviaList, text: ISimpleText): ISyntaxToken;
    function withTrailingTrivia(token: ISyntaxToken, trailingTrivia: ISyntaxTriviaList, text: ISimpleText): ISyntaxToken;
    function emptyToken(kind: SyntaxKind): ISyntaxToken;
}
declare module TypeScript {
    interface ISyntaxTrivia {
        parent?: ISyntaxTriviaList;
        kind(): SyntaxKind;
        isWhitespace(): boolean;
        isComment(): boolean;
        isNewLine(): boolean;
        isSkippedToken(): boolean;
        fullStart(): number;
        fullWidth(): number;
        fullText(): string;
        skippedToken(): ISyntaxToken;
        clone(): ISyntaxTrivia;
    }
}
declare module TypeScript.Syntax {
    function deferredTrivia(kind: SyntaxKind, text: ISimpleText, fullStart: number, fullWidth: number): ISyntaxTrivia;
    function skippedTokenTrivia(token: ISyntaxToken, text: ISimpleText): ISyntaxTrivia;
    function splitMultiLineCommentTriviaIntoMultipleLines(trivia: ISyntaxTrivia): string[];
}
declare module TypeScript {
    interface ISyntaxTriviaList {
        parent?: ISyntaxToken;
        isShared(): boolean;
        count(): number;
        syntaxTriviaAt(index: number): ISyntaxTrivia;
        fullWidth(): number;
        fullText(): string;
        hasComment(): boolean;
        hasNewLine(): boolean;
        hasSkippedToken(): boolean;
        last(): ISyntaxTrivia;
        toArray(): ISyntaxTrivia[];
        clone(): ISyntaxTriviaList;
    }
}
declare module TypeScript.Syntax {
    var emptyTriviaList: ISyntaxTriviaList;
    function triviaList(trivia: ISyntaxTrivia[]): ISyntaxTriviaList;
}
declare module TypeScript {
    class SyntaxUtilities {
        static isAnyFunctionExpressionOrDeclaration(ast: ISyntaxElement): boolean;
        static isLastTokenOnLine(token: ISyntaxToken, text: ISimpleText): boolean;
        static isLeftHandSizeExpression(element: ISyntaxElement): boolean;
        static isExpression(element: ISyntaxElement): boolean;
        static isSwitchClause(element: ISyntaxElement): boolean;
        static isTypeMember(element: ISyntaxElement): boolean;
        static isClassElement(element: ISyntaxElement): boolean;
        static isModuleElement(element: ISyntaxElement): boolean;
        static isStatement(element: ISyntaxElement): boolean;
        static isAngleBracket(positionedElement: ISyntaxElement): boolean;
        static getToken(list: ISyntaxToken[], kind: SyntaxKind): ISyntaxToken;
        static containsToken(list: ISyntaxToken[], kind: SyntaxKind): boolean;
        static hasExportKeyword(moduleElement: IModuleElementSyntax): boolean;
        static getExportKeyword(moduleElement: IModuleElementSyntax): ISyntaxToken;
        static isAmbientDeclarationSyntax(positionNode: ISyntaxNode): boolean;
    }
}
declare module TypeScript {
    function visitNodeOrToken(visitor: ISyntaxVisitor, element: ISyntaxNodeOrToken): any;
    interface ISyntaxVisitor {
        visitToken(token: ISyntaxToken): any;
        visitSourceUnit(node: SourceUnitSyntax): any;
        visitQualifiedName(node: QualifiedNameSyntax): any;
        visitObjectType(node: ObjectTypeSyntax): any;
        visitFunctionType(node: FunctionTypeSyntax): any;
        visitArrayType(node: ArrayTypeSyntax): any;
        visitConstructorType(node: ConstructorTypeSyntax): any;
        visitGenericType(node: GenericTypeSyntax): any;
        visitTypeQuery(node: TypeQuerySyntax): any;
        visitTupleType(node: TupleTypeSyntax): any;
        visitInterfaceDeclaration(node: InterfaceDeclarationSyntax): any;
        visitFunctionDeclaration(node: FunctionDeclarationSyntax): any;
        visitModuleDeclaration(node: ModuleDeclarationSyntax): any;
        visitClassDeclaration(node: ClassDeclarationSyntax): any;
        visitEnumDeclaration(node: EnumDeclarationSyntax): any;
        visitImportDeclaration(node: ImportDeclarationSyntax): any;
        visitExportAssignment(node: ExportAssignmentSyntax): any;
        visitMemberFunctionDeclaration(node: MemberFunctionDeclarationSyntax): any;
        visitMemberVariableDeclaration(node: MemberVariableDeclarationSyntax): any;
        visitConstructorDeclaration(node: ConstructorDeclarationSyntax): any;
        visitIndexMemberDeclaration(node: IndexMemberDeclarationSyntax): any;
        visitGetAccessor(node: GetAccessorSyntax): any;
        visitSetAccessor(node: SetAccessorSyntax): any;
        visitPropertySignature(node: PropertySignatureSyntax): any;
        visitCallSignature(node: CallSignatureSyntax): any;
        visitConstructSignature(node: ConstructSignatureSyntax): any;
        visitIndexSignature(node: IndexSignatureSyntax): any;
        visitMethodSignature(node: MethodSignatureSyntax): any;
        visitBlock(node: BlockSyntax): any;
        visitIfStatement(node: IfStatementSyntax): any;
        visitVariableStatement(node: VariableStatementSyntax): any;
        visitExpressionStatement(node: ExpressionStatementSyntax): any;
        visitReturnStatement(node: ReturnStatementSyntax): any;
        visitSwitchStatement(node: SwitchStatementSyntax): any;
        visitBreakStatement(node: BreakStatementSyntax): any;
        visitContinueStatement(node: ContinueStatementSyntax): any;
        visitForStatement(node: ForStatementSyntax): any;
        visitForInStatement(node: ForInStatementSyntax): any;
        visitEmptyStatement(node: EmptyStatementSyntax): any;
        visitThrowStatement(node: ThrowStatementSyntax): any;
        visitWhileStatement(node: WhileStatementSyntax): any;
        visitTryStatement(node: TryStatementSyntax): any;
        visitLabeledStatement(node: LabeledStatementSyntax): any;
        visitDoStatement(node: DoStatementSyntax): any;
        visitDebuggerStatement(node: DebuggerStatementSyntax): any;
        visitWithStatement(node: WithStatementSyntax): any;
        visitPrefixUnaryExpression(node: PrefixUnaryExpressionSyntax): any;
        visitDeleteExpression(node: DeleteExpressionSyntax): any;
        visitTypeOfExpression(node: TypeOfExpressionSyntax): any;
        visitVoidExpression(node: VoidExpressionSyntax): any;
        visitConditionalExpression(node: ConditionalExpressionSyntax): any;
        visitBinaryExpression(node: BinaryExpressionSyntax): any;
        visitPostfixUnaryExpression(node: PostfixUnaryExpressionSyntax): any;
        visitMemberAccessExpression(node: MemberAccessExpressionSyntax): any;
        visitInvocationExpression(node: InvocationExpressionSyntax): any;
        visitArrayLiteralExpression(node: ArrayLiteralExpressionSyntax): any;
        visitObjectLiteralExpression(node: ObjectLiteralExpressionSyntax): any;
        visitObjectCreationExpression(node: ObjectCreationExpressionSyntax): any;
        visitParenthesizedExpression(node: ParenthesizedExpressionSyntax): any;
        visitParenthesizedArrowFunctionExpression(node: ParenthesizedArrowFunctionExpressionSyntax): any;
        visitSimpleArrowFunctionExpression(node: SimpleArrowFunctionExpressionSyntax): any;
        visitCastExpression(node: CastExpressionSyntax): any;
        visitElementAccessExpression(node: ElementAccessExpressionSyntax): any;
        visitFunctionExpression(node: FunctionExpressionSyntax): any;
        visitOmittedExpression(node: OmittedExpressionSyntax): any;
        visitVariableDeclaration(node: VariableDeclarationSyntax): any;
        visitVariableDeclarator(node: VariableDeclaratorSyntax): any;
        visitArgumentList(node: ArgumentListSyntax): any;
        visitParameterList(node: ParameterListSyntax): any;
        visitTypeArgumentList(node: TypeArgumentListSyntax): any;
        visitTypeParameterList(node: TypeParameterListSyntax): any;
        visitHeritageClause(node: HeritageClauseSyntax): any;
        visitEqualsValueClause(node: EqualsValueClauseSyntax): any;
        visitCaseSwitchClause(node: CaseSwitchClauseSyntax): any;
        visitDefaultSwitchClause(node: DefaultSwitchClauseSyntax): any;
        visitElseClause(node: ElseClauseSyntax): any;
        visitCatchClause(node: CatchClauseSyntax): any;
        visitFinallyClause(node: FinallyClauseSyntax): any;
        visitTypeParameter(node: TypeParameterSyntax): any;
        visitConstraint(node: ConstraintSyntax): any;
        visitSimplePropertyAssignment(node: SimplePropertyAssignmentSyntax): any;
        visitFunctionPropertyAssignment(node: FunctionPropertyAssignmentSyntax): any;
        visitParameter(node: ParameterSyntax): any;
        visitEnumElement(node: EnumElementSyntax): any;
        visitTypeAnnotation(node: TypeAnnotationSyntax): any;
        visitExternalModuleReference(node: ExternalModuleReferenceSyntax): any;
        visitModuleNameModuleReference(node: ModuleNameModuleReferenceSyntax): any;
    }
}
declare module TypeScript {
    class SyntaxWalker implements ISyntaxVisitor {
        visitToken(token: ISyntaxToken): void;
        visitNode(node: ISyntaxNode): void;
        visitNodeOrToken(nodeOrToken: ISyntaxNodeOrToken): void;
        private visitOptionalToken(token);
        visitOptionalNode(node: ISyntaxNode): void;
        visitOptionalNodeOrToken(nodeOrToken: ISyntaxNodeOrToken): void;
        visitList(list: ISyntaxNodeOrToken[]): void;
        visitSeparatedList(list: ISyntaxNodeOrToken[]): void;
        visitSourceUnit(node: SourceUnitSyntax): void;
        visitQualifiedName(node: QualifiedNameSyntax): void;
        visitObjectType(node: ObjectTypeSyntax): void;
        visitFunctionType(node: FunctionTypeSyntax): void;
        visitArrayType(node: ArrayTypeSyntax): void;
        visitConstructorType(node: ConstructorTypeSyntax): void;
        visitGenericType(node: GenericTypeSyntax): void;
        visitTypeQuery(node: TypeQuerySyntax): void;
        visitTupleType(node: TupleTypeSyntax): void;
        visitInterfaceDeclaration(node: InterfaceDeclarationSyntax): void;
        visitFunctionDeclaration(node: FunctionDeclarationSyntax): void;
        visitModuleDeclaration(node: ModuleDeclarationSyntax): void;
        visitClassDeclaration(node: ClassDeclarationSyntax): void;
        visitEnumDeclaration(node: EnumDeclarationSyntax): void;
        visitImportDeclaration(node: ImportDeclarationSyntax): void;
        visitExportAssignment(node: ExportAssignmentSyntax): void;
        visitMemberFunctionDeclaration(node: MemberFunctionDeclarationSyntax): void;
        visitMemberVariableDeclaration(node: MemberVariableDeclarationSyntax): void;
        visitConstructorDeclaration(node: ConstructorDeclarationSyntax): void;
        visitIndexMemberDeclaration(node: IndexMemberDeclarationSyntax): void;
        visitGetAccessor(node: GetAccessorSyntax): void;
        visitSetAccessor(node: SetAccessorSyntax): void;
        visitPropertySignature(node: PropertySignatureSyntax): void;
        visitCallSignature(node: CallSignatureSyntax): void;
        visitConstructSignature(node: ConstructSignatureSyntax): void;
        visitIndexSignature(node: IndexSignatureSyntax): void;
        visitMethodSignature(node: MethodSignatureSyntax): void;
        visitBlock(node: BlockSyntax): void;
        visitIfStatement(node: IfStatementSyntax): void;
        visitVariableStatement(node: VariableStatementSyntax): void;
        visitExpressionStatement(node: ExpressionStatementSyntax): void;
        visitReturnStatement(node: ReturnStatementSyntax): void;
        visitSwitchStatement(node: SwitchStatementSyntax): void;
        visitBreakStatement(node: BreakStatementSyntax): void;
        visitContinueStatement(node: ContinueStatementSyntax): void;
        visitForStatement(node: ForStatementSyntax): void;
        visitForInStatement(node: ForInStatementSyntax): void;
        visitEmptyStatement(node: EmptyStatementSyntax): void;
        visitThrowStatement(node: ThrowStatementSyntax): void;
        visitWhileStatement(node: WhileStatementSyntax): void;
        visitTryStatement(node: TryStatementSyntax): void;
        visitLabeledStatement(node: LabeledStatementSyntax): void;
        visitDoStatement(node: DoStatementSyntax): void;
        visitDebuggerStatement(node: DebuggerStatementSyntax): void;
        visitWithStatement(node: WithStatementSyntax): void;
        visitPrefixUnaryExpression(node: PrefixUnaryExpressionSyntax): void;
        visitDeleteExpression(node: DeleteExpressionSyntax): void;
        visitTypeOfExpression(node: TypeOfExpressionSyntax): void;
        visitVoidExpression(node: VoidExpressionSyntax): void;
        visitConditionalExpression(node: ConditionalExpressionSyntax): void;
        visitBinaryExpression(node: BinaryExpressionSyntax): void;
        visitPostfixUnaryExpression(node: PostfixUnaryExpressionSyntax): void;
        visitMemberAccessExpression(node: MemberAccessExpressionSyntax): void;
        visitInvocationExpression(node: InvocationExpressionSyntax): void;
        visitArrayLiteralExpression(node: ArrayLiteralExpressionSyntax): void;
        visitObjectLiteralExpression(node: ObjectLiteralExpressionSyntax): void;
        visitObjectCreationExpression(node: ObjectCreationExpressionSyntax): void;
        visitParenthesizedExpression(node: ParenthesizedExpressionSyntax): void;
        visitParenthesizedArrowFunctionExpression(node: ParenthesizedArrowFunctionExpressionSyntax): void;
        visitSimpleArrowFunctionExpression(node: SimpleArrowFunctionExpressionSyntax): void;
        visitCastExpression(node: CastExpressionSyntax): void;
        visitElementAccessExpression(node: ElementAccessExpressionSyntax): void;
        visitFunctionExpression(node: FunctionExpressionSyntax): void;
        visitOmittedExpression(node: OmittedExpressionSyntax): void;
        visitVariableDeclaration(node: VariableDeclarationSyntax): void;
        visitVariableDeclarator(node: VariableDeclaratorSyntax): void;
        visitArgumentList(node: ArgumentListSyntax): void;
        visitParameterList(node: ParameterListSyntax): void;
        visitTypeArgumentList(node: TypeArgumentListSyntax): void;
        visitTypeParameterList(node: TypeParameterListSyntax): void;
        visitHeritageClause(node: HeritageClauseSyntax): void;
        visitEqualsValueClause(node: EqualsValueClauseSyntax): void;
        visitCaseSwitchClause(node: CaseSwitchClauseSyntax): void;
        visitDefaultSwitchClause(node: DefaultSwitchClauseSyntax): void;
        visitElseClause(node: ElseClauseSyntax): void;
        visitCatchClause(node: CatchClauseSyntax): void;
        visitFinallyClause(node: FinallyClauseSyntax): void;
        visitTypeParameter(node: TypeParameterSyntax): void;
        visitConstraint(node: ConstraintSyntax): void;
        visitSimplePropertyAssignment(node: SimplePropertyAssignmentSyntax): void;
        visitFunctionPropertyAssignment(node: FunctionPropertyAssignmentSyntax): void;
        visitParameter(node: ParameterSyntax): void;
        visitEnumElement(node: EnumElementSyntax): void;
        visitTypeAnnotation(node: TypeAnnotationSyntax): void;
        visitExternalModuleReference(node: ExternalModuleReferenceSyntax): void;
        visitModuleNameModuleReference(node: ModuleNameModuleReferenceSyntax): void;
    }
}
declare module TypeScript {
    class DepthLimitedWalker extends SyntaxWalker {
        private _depth;
        private _maximumDepth;
        constructor(maximumDepth: number);
        visitNode(node: ISyntaxNode): void;
    }
}
declare module TypeScript.Parser {
    var syntaxFactory: Syntax.ISyntaxFactory;
    interface IParserSource {
        text: ISimpleText;
        fileName: string;
        languageVersion: ts.ScriptTarget;
        currentNode(): ISyntaxNode;
        currentToken(): ISyntaxToken;
        currentContextualToken(): ISyntaxToken;
        peekToken(n: number): ISyntaxToken;
        consumeNode(node: ISyntaxNode): void;
        consumeToken(token: ISyntaxToken): void;
        getRewindPoint(): IRewindPoint;
        rewind(rewindPoint: IRewindPoint): void;
        releaseRewindPoint(rewindPoint: IRewindPoint): void;
        tokenDiagnostics(): Diagnostic[];
        release(): void;
    }
    interface IRewindPoint {
    }
    function parse(fileName: string, text: ISimpleText, languageVersion: ts.ScriptTarget, isDeclaration: boolean): SyntaxTree;
    function parseSource(source: IParserSource, isDeclaration: boolean): SyntaxTree;
}
declare module TypeScript.Syntax.Concrete {
    var isConcrete: boolean;
    class SourceUnitSyntax extends SyntaxNode {
        syntaxTree: SyntaxTree;
        moduleElements: IModuleElementSyntax[];
        endOfFileToken: ISyntaxToken;
        constructor(data: number, moduleElements: IModuleElementSyntax[], endOfFileToken: ISyntaxToken);
    }
    class QualifiedNameSyntax extends SyntaxNode implements INameSyntax {
        left: INameSyntax;
        dotToken: ISyntaxToken;
        right: ISyntaxToken;
        _nameBrand: any;
        _typeBrand: any;
        constructor(data: number, left: INameSyntax, dotToken: ISyntaxToken, right: ISyntaxToken);
    }
    class ObjectTypeSyntax extends SyntaxNode implements ITypeSyntax {
        openBraceToken: ISyntaxToken;
        typeMembers: ITypeMemberSyntax[];
        closeBraceToken: ISyntaxToken;
        _typeBrand: any;
        constructor(data: number, openBraceToken: ISyntaxToken, typeMembers: ITypeMemberSyntax[], closeBraceToken: ISyntaxToken);
    }
    class FunctionTypeSyntax extends SyntaxNode implements ITypeSyntax {
        typeParameterList: TypeParameterListSyntax;
        parameterList: ParameterListSyntax;
        equalsGreaterThanToken: ISyntaxToken;
        type: ITypeSyntax;
        _typeBrand: any;
        constructor(data: number, typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax);
    }
    class ArrayTypeSyntax extends SyntaxNode implements ITypeSyntax {
        type: ITypeSyntax;
        openBracketToken: ISyntaxToken;
        closeBracketToken: ISyntaxToken;
        _typeBrand: any;
        constructor(data: number, type: ITypeSyntax, openBracketToken: ISyntaxToken, closeBracketToken: ISyntaxToken);
    }
    class ConstructorTypeSyntax extends SyntaxNode implements ITypeSyntax {
        newKeyword: ISyntaxToken;
        typeParameterList: TypeParameterListSyntax;
        parameterList: ParameterListSyntax;
        equalsGreaterThanToken: ISyntaxToken;
        type: ITypeSyntax;
        _typeBrand: any;
        constructor(data: number, newKeyword: ISyntaxToken, typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, equalsGreaterThanToken: ISyntaxToken, type: ITypeSyntax);
    }
    class GenericTypeSyntax extends SyntaxNode implements ITypeSyntax {
        name: INameSyntax;
        typeArgumentList: TypeArgumentListSyntax;
        _typeBrand: any;
        constructor(data: number, name: INameSyntax, typeArgumentList: TypeArgumentListSyntax);
    }
    class TypeQuerySyntax extends SyntaxNode implements ITypeSyntax {
        typeOfKeyword: ISyntaxToken;
        name: INameSyntax;
        _typeBrand: any;
        constructor(data: number, typeOfKeyword: ISyntaxToken, name: INameSyntax);
    }
    class TupleTypeSyntax extends SyntaxNode implements ITypeSyntax {
        openBracketToken: ISyntaxToken;
        types: ITypeSyntax[];
        closeBracketToken: ISyntaxToken;
        _typeBrand: any;
        constructor(data: number, openBracketToken: ISyntaxToken, types: ITypeSyntax[], closeBracketToken: ISyntaxToken);
    }
    class InterfaceDeclarationSyntax extends SyntaxNode implements IModuleElementSyntax {
        modifiers: ISyntaxToken[];
        interfaceKeyword: ISyntaxToken;
        identifier: ISyntaxToken;
        typeParameterList: TypeParameterListSyntax;
        heritageClauses: HeritageClauseSyntax[];
        body: ObjectTypeSyntax;
        _moduleElementBrand: any;
        constructor(data: number, modifiers: ISyntaxToken[], interfaceKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: HeritageClauseSyntax[], body: ObjectTypeSyntax);
    }
    class FunctionDeclarationSyntax extends SyntaxNode implements IStatementSyntax {
        modifiers: ISyntaxToken[];
        functionKeyword: ISyntaxToken;
        identifier: ISyntaxToken;
        callSignature: CallSignatureSyntax;
        block: BlockSyntax;
        semicolonToken: ISyntaxToken;
        _statementBrand: any;
        _moduleElementBrand: any;
        constructor(data: number, modifiers: ISyntaxToken[], functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken);
    }
    class ModuleDeclarationSyntax extends SyntaxNode implements IModuleElementSyntax {
        modifiers: ISyntaxToken[];
        moduleKeyword: ISyntaxToken;
        name: INameSyntax;
        stringLiteral: ISyntaxToken;
        openBraceToken: ISyntaxToken;
        moduleElements: IModuleElementSyntax[];
        closeBraceToken: ISyntaxToken;
        _moduleElementBrand: any;
        constructor(data: number, modifiers: ISyntaxToken[], moduleKeyword: ISyntaxToken, name: INameSyntax, stringLiteral: ISyntaxToken, openBraceToken: ISyntaxToken, moduleElements: IModuleElementSyntax[], closeBraceToken: ISyntaxToken);
    }
    class ClassDeclarationSyntax extends SyntaxNode implements IModuleElementSyntax {
        modifiers: ISyntaxToken[];
        classKeyword: ISyntaxToken;
        identifier: ISyntaxToken;
        typeParameterList: TypeParameterListSyntax;
        heritageClauses: HeritageClauseSyntax[];
        openBraceToken: ISyntaxToken;
        classElements: IClassElementSyntax[];
        closeBraceToken: ISyntaxToken;
        _moduleElementBrand: any;
        constructor(data: number, modifiers: ISyntaxToken[], classKeyword: ISyntaxToken, identifier: ISyntaxToken, typeParameterList: TypeParameterListSyntax, heritageClauses: HeritageClauseSyntax[], openBraceToken: ISyntaxToken, classElements: IClassElementSyntax[], closeBraceToken: ISyntaxToken);
    }
    class EnumDeclarationSyntax extends SyntaxNode implements IModuleElementSyntax {
        modifiers: ISyntaxToken[];
        enumKeyword: ISyntaxToken;
        identifier: ISyntaxToken;
        openBraceToken: ISyntaxToken;
        enumElements: EnumElementSyntax[];
        closeBraceToken: ISyntaxToken;
        _moduleElementBrand: any;
        constructor(data: number, modifiers: ISyntaxToken[], enumKeyword: ISyntaxToken, identifier: ISyntaxToken, openBraceToken: ISyntaxToken, enumElements: EnumElementSyntax[], closeBraceToken: ISyntaxToken);
    }
    class ImportDeclarationSyntax extends SyntaxNode implements IModuleElementSyntax {
        modifiers: ISyntaxToken[];
        importKeyword: ISyntaxToken;
        identifier: ISyntaxToken;
        equalsToken: ISyntaxToken;
        moduleReference: IModuleReferenceSyntax;
        semicolonToken: ISyntaxToken;
        _moduleElementBrand: any;
        constructor(data: number, modifiers: ISyntaxToken[], importKeyword: ISyntaxToken, identifier: ISyntaxToken, equalsToken: ISyntaxToken, moduleReference: IModuleReferenceSyntax, semicolonToken: ISyntaxToken);
    }
    class ExportAssignmentSyntax extends SyntaxNode implements IModuleElementSyntax {
        exportKeyword: ISyntaxToken;
        equalsToken: ISyntaxToken;
        identifier: ISyntaxToken;
        semicolonToken: ISyntaxToken;
        _moduleElementBrand: any;
        constructor(data: number, exportKeyword: ISyntaxToken, equalsToken: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken);
    }
    class MemberFunctionDeclarationSyntax extends SyntaxNode implements IMemberDeclarationSyntax {
        modifiers: ISyntaxToken[];
        propertyName: ISyntaxToken;
        callSignature: CallSignatureSyntax;
        block: BlockSyntax;
        semicolonToken: ISyntaxToken;
        _memberDeclarationBrand: any;
        _classElementBrand: any;
        constructor(data: number, modifiers: ISyntaxToken[], propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken);
    }
    class MemberVariableDeclarationSyntax extends SyntaxNode implements IMemberDeclarationSyntax {
        modifiers: ISyntaxToken[];
        variableDeclarator: VariableDeclaratorSyntax;
        semicolonToken: ISyntaxToken;
        _memberDeclarationBrand: any;
        _classElementBrand: any;
        constructor(data: number, modifiers: ISyntaxToken[], variableDeclarator: VariableDeclaratorSyntax, semicolonToken: ISyntaxToken);
    }
    class ConstructorDeclarationSyntax extends SyntaxNode implements IClassElementSyntax {
        modifiers: ISyntaxToken[];
        constructorKeyword: ISyntaxToken;
        callSignature: CallSignatureSyntax;
        block: BlockSyntax;
        semicolonToken: ISyntaxToken;
        _classElementBrand: any;
        constructor(data: number, modifiers: ISyntaxToken[], constructorKeyword: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax, semicolonToken: ISyntaxToken);
    }
    class IndexMemberDeclarationSyntax extends SyntaxNode implements IClassElementSyntax {
        modifiers: ISyntaxToken[];
        indexSignature: IndexSignatureSyntax;
        semicolonToken: ISyntaxToken;
        _classElementBrand: any;
        constructor(data: number, modifiers: ISyntaxToken[], indexSignature: IndexSignatureSyntax, semicolonToken: ISyntaxToken);
    }
    class GetAccessorSyntax extends SyntaxNode implements IMemberDeclarationSyntax, IPropertyAssignmentSyntax {
        modifiers: ISyntaxToken[];
        getKeyword: ISyntaxToken;
        propertyName: ISyntaxToken;
        callSignature: CallSignatureSyntax;
        block: BlockSyntax;
        _memberDeclarationBrand: any;
        _propertyAssignmentBrand: any;
        _classElementBrand: any;
        constructor(data: number, modifiers: ISyntaxToken[], getKeyword: ISyntaxToken, propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax);
    }
    class SetAccessorSyntax extends SyntaxNode implements IMemberDeclarationSyntax, IPropertyAssignmentSyntax {
        modifiers: ISyntaxToken[];
        setKeyword: ISyntaxToken;
        propertyName: ISyntaxToken;
        callSignature: CallSignatureSyntax;
        block: BlockSyntax;
        _memberDeclarationBrand: any;
        _propertyAssignmentBrand: any;
        _classElementBrand: any;
        constructor(data: number, modifiers: ISyntaxToken[], setKeyword: ISyntaxToken, propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax);
    }
    class PropertySignatureSyntax extends SyntaxNode implements ITypeMemberSyntax {
        propertyName: ISyntaxToken;
        questionToken: ISyntaxToken;
        typeAnnotation: TypeAnnotationSyntax;
        _typeMemberBrand: any;
        constructor(data: number, propertyName: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax);
    }
    class CallSignatureSyntax extends SyntaxNode implements ITypeMemberSyntax {
        typeParameterList: TypeParameterListSyntax;
        parameterList: ParameterListSyntax;
        typeAnnotation: TypeAnnotationSyntax;
        _typeMemberBrand: any;
        constructor(data: number, typeParameterList: TypeParameterListSyntax, parameterList: ParameterListSyntax, typeAnnotation: TypeAnnotationSyntax);
    }
    class ConstructSignatureSyntax extends SyntaxNode implements ITypeMemberSyntax {
        newKeyword: ISyntaxToken;
        callSignature: CallSignatureSyntax;
        _typeMemberBrand: any;
        constructor(data: number, newKeyword: ISyntaxToken, callSignature: CallSignatureSyntax);
    }
    class IndexSignatureSyntax extends SyntaxNode implements ITypeMemberSyntax {
        openBracketToken: ISyntaxToken;
        parameters: ParameterSyntax[];
        closeBracketToken: ISyntaxToken;
        typeAnnotation: TypeAnnotationSyntax;
        _typeMemberBrand: any;
        constructor(data: number, openBracketToken: ISyntaxToken, parameters: ParameterSyntax[], closeBracketToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax);
    }
    class MethodSignatureSyntax extends SyntaxNode implements ITypeMemberSyntax {
        propertyName: ISyntaxToken;
        questionToken: ISyntaxToken;
        callSignature: CallSignatureSyntax;
        _typeMemberBrand: any;
        constructor(data: number, propertyName: ISyntaxToken, questionToken: ISyntaxToken, callSignature: CallSignatureSyntax);
    }
    class BlockSyntax extends SyntaxNode implements IStatementSyntax {
        openBraceToken: ISyntaxToken;
        statements: IStatementSyntax[];
        closeBraceToken: ISyntaxToken;
        _statementBrand: any;
        _moduleElementBrand: any;
        constructor(data: number, openBraceToken: ISyntaxToken, statements: IStatementSyntax[], closeBraceToken: ISyntaxToken);
    }
    class IfStatementSyntax extends SyntaxNode implements IStatementSyntax {
        ifKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        condition: IExpressionSyntax;
        closeParenToken: ISyntaxToken;
        statement: IStatementSyntax;
        elseClause: ElseClauseSyntax;
        _statementBrand: any;
        _moduleElementBrand: any;
        constructor(data: number, ifKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax, elseClause: ElseClauseSyntax);
    }
    class VariableStatementSyntax extends SyntaxNode implements IStatementSyntax {
        modifiers: ISyntaxToken[];
        variableDeclaration: VariableDeclarationSyntax;
        semicolonToken: ISyntaxToken;
        _statementBrand: any;
        _moduleElementBrand: any;
        constructor(data: number, modifiers: ISyntaxToken[], variableDeclaration: VariableDeclarationSyntax, semicolonToken: ISyntaxToken);
    }
    class ExpressionStatementSyntax extends SyntaxNode implements IStatementSyntax {
        expression: IExpressionSyntax;
        semicolonToken: ISyntaxToken;
        _statementBrand: any;
        _moduleElementBrand: any;
        constructor(data: number, expression: IExpressionSyntax, semicolonToken: ISyntaxToken);
    }
    class ReturnStatementSyntax extends SyntaxNode implements IStatementSyntax {
        returnKeyword: ISyntaxToken;
        expression: IExpressionSyntax;
        semicolonToken: ISyntaxToken;
        _statementBrand: any;
        _moduleElementBrand: any;
        constructor(data: number, returnKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken);
    }
    class SwitchStatementSyntax extends SyntaxNode implements IStatementSyntax {
        switchKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        expression: IExpressionSyntax;
        closeParenToken: ISyntaxToken;
        openBraceToken: ISyntaxToken;
        switchClauses: ISwitchClauseSyntax[];
        closeBraceToken: ISyntaxToken;
        _statementBrand: any;
        _moduleElementBrand: any;
        constructor(data: number, switchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, openBraceToken: ISyntaxToken, switchClauses: ISwitchClauseSyntax[], closeBraceToken: ISyntaxToken);
    }
    class BreakStatementSyntax extends SyntaxNode implements IStatementSyntax {
        breakKeyword: ISyntaxToken;
        identifier: ISyntaxToken;
        semicolonToken: ISyntaxToken;
        _statementBrand: any;
        _moduleElementBrand: any;
        constructor(data: number, breakKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken);
    }
    class ContinueStatementSyntax extends SyntaxNode implements IStatementSyntax {
        continueKeyword: ISyntaxToken;
        identifier: ISyntaxToken;
        semicolonToken: ISyntaxToken;
        _statementBrand: any;
        _moduleElementBrand: any;
        constructor(data: number, continueKeyword: ISyntaxToken, identifier: ISyntaxToken, semicolonToken: ISyntaxToken);
    }
    class ForStatementSyntax extends SyntaxNode implements IStatementSyntax {
        forKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        variableDeclaration: VariableDeclarationSyntax;
        initializer: IExpressionSyntax;
        firstSemicolonToken: ISyntaxToken;
        condition: IExpressionSyntax;
        secondSemicolonToken: ISyntaxToken;
        incrementor: IExpressionSyntax;
        closeParenToken: ISyntaxToken;
        statement: IStatementSyntax;
        _statementBrand: any;
        _moduleElementBrand: any;
        constructor(data: number, forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, initializer: IExpressionSyntax, firstSemicolonToken: ISyntaxToken, condition: IExpressionSyntax, secondSemicolonToken: ISyntaxToken, incrementor: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax);
    }
    class ForInStatementSyntax extends SyntaxNode implements IStatementSyntax {
        forKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        variableDeclaration: VariableDeclarationSyntax;
        left: IExpressionSyntax;
        inKeyword: ISyntaxToken;
        expression: IExpressionSyntax;
        closeParenToken: ISyntaxToken;
        statement: IStatementSyntax;
        _statementBrand: any;
        _moduleElementBrand: any;
        constructor(data: number, forKeyword: ISyntaxToken, openParenToken: ISyntaxToken, variableDeclaration: VariableDeclarationSyntax, left: IExpressionSyntax, inKeyword: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax);
    }
    class EmptyStatementSyntax extends SyntaxNode implements IStatementSyntax {
        semicolonToken: ISyntaxToken;
        _statementBrand: any;
        _moduleElementBrand: any;
        constructor(data: number, semicolonToken: ISyntaxToken);
    }
    class ThrowStatementSyntax extends SyntaxNode implements IStatementSyntax {
        throwKeyword: ISyntaxToken;
        expression: IExpressionSyntax;
        semicolonToken: ISyntaxToken;
        _statementBrand: any;
        _moduleElementBrand: any;
        constructor(data: number, throwKeyword: ISyntaxToken, expression: IExpressionSyntax, semicolonToken: ISyntaxToken);
    }
    class WhileStatementSyntax extends SyntaxNode implements IStatementSyntax {
        whileKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        condition: IExpressionSyntax;
        closeParenToken: ISyntaxToken;
        statement: IStatementSyntax;
        _statementBrand: any;
        _moduleElementBrand: any;
        constructor(data: number, whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax);
    }
    class TryStatementSyntax extends SyntaxNode implements IStatementSyntax {
        tryKeyword: ISyntaxToken;
        block: BlockSyntax;
        catchClause: CatchClauseSyntax;
        finallyClause: FinallyClauseSyntax;
        _statementBrand: any;
        _moduleElementBrand: any;
        constructor(data: number, tryKeyword: ISyntaxToken, block: BlockSyntax, catchClause: CatchClauseSyntax, finallyClause: FinallyClauseSyntax);
    }
    class LabeledStatementSyntax extends SyntaxNode implements IStatementSyntax {
        identifier: ISyntaxToken;
        colonToken: ISyntaxToken;
        statement: IStatementSyntax;
        _statementBrand: any;
        _moduleElementBrand: any;
        constructor(data: number, identifier: ISyntaxToken, colonToken: ISyntaxToken, statement: IStatementSyntax);
    }
    class DoStatementSyntax extends SyntaxNode implements IStatementSyntax {
        doKeyword: ISyntaxToken;
        statement: IStatementSyntax;
        whileKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        condition: IExpressionSyntax;
        closeParenToken: ISyntaxToken;
        semicolonToken: ISyntaxToken;
        _statementBrand: any;
        _moduleElementBrand: any;
        constructor(data: number, doKeyword: ISyntaxToken, statement: IStatementSyntax, whileKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, semicolonToken: ISyntaxToken);
    }
    class DebuggerStatementSyntax extends SyntaxNode implements IStatementSyntax {
        debuggerKeyword: ISyntaxToken;
        semicolonToken: ISyntaxToken;
        _statementBrand: any;
        _moduleElementBrand: any;
        constructor(data: number, debuggerKeyword: ISyntaxToken, semicolonToken: ISyntaxToken);
    }
    class WithStatementSyntax extends SyntaxNode implements IStatementSyntax {
        withKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        condition: IExpressionSyntax;
        closeParenToken: ISyntaxToken;
        statement: IStatementSyntax;
        _statementBrand: any;
        _moduleElementBrand: any;
        constructor(data: number, withKeyword: ISyntaxToken, openParenToken: ISyntaxToken, condition: IExpressionSyntax, closeParenToken: ISyntaxToken, statement: IStatementSyntax);
    }
    class PrefixUnaryExpressionSyntax extends SyntaxNode implements IUnaryExpressionSyntax {
        operatorToken: ISyntaxToken;
        operand: IUnaryExpressionSyntax;
        _unaryExpressionBrand: any;
        _expressionBrand: any;
        constructor(data: number, operatorToken: ISyntaxToken, operand: IUnaryExpressionSyntax);
        kind(): SyntaxKind;
    }
    class DeleteExpressionSyntax extends SyntaxNode implements IUnaryExpressionSyntax {
        deleteKeyword: ISyntaxToken;
        expression: IUnaryExpressionSyntax;
        _unaryExpressionBrand: any;
        _expressionBrand: any;
        constructor(data: number, deleteKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax);
    }
    class TypeOfExpressionSyntax extends SyntaxNode implements IUnaryExpressionSyntax {
        typeOfKeyword: ISyntaxToken;
        expression: IUnaryExpressionSyntax;
        _unaryExpressionBrand: any;
        _expressionBrand: any;
        constructor(data: number, typeOfKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax);
    }
    class VoidExpressionSyntax extends SyntaxNode implements IUnaryExpressionSyntax {
        voidKeyword: ISyntaxToken;
        expression: IUnaryExpressionSyntax;
        _unaryExpressionBrand: any;
        _expressionBrand: any;
        constructor(data: number, voidKeyword: ISyntaxToken, expression: IUnaryExpressionSyntax);
    }
    class ConditionalExpressionSyntax extends SyntaxNode implements IExpressionSyntax {
        condition: IExpressionSyntax;
        questionToken: ISyntaxToken;
        whenTrue: IExpressionSyntax;
        colonToken: ISyntaxToken;
        whenFalse: IExpressionSyntax;
        _expressionBrand: any;
        constructor(data: number, condition: IExpressionSyntax, questionToken: ISyntaxToken, whenTrue: IExpressionSyntax, colonToken: ISyntaxToken, whenFalse: IExpressionSyntax);
    }
    class BinaryExpressionSyntax extends SyntaxNode implements IExpressionSyntax {
        left: IExpressionSyntax;
        operatorToken: ISyntaxToken;
        right: IExpressionSyntax;
        _expressionBrand: any;
        constructor(data: number, left: IExpressionSyntax, operatorToken: ISyntaxToken, right: IExpressionSyntax);
        kind(): SyntaxKind;
    }
    class PostfixUnaryExpressionSyntax extends SyntaxNode implements IPostfixExpressionSyntax {
        operand: ILeftHandSideExpressionSyntax;
        operatorToken: ISyntaxToken;
        _postfixExpressionBrand: any;
        _unaryExpressionBrand: any;
        _expressionBrand: any;
        constructor(data: number, operand: ILeftHandSideExpressionSyntax, operatorToken: ISyntaxToken);
        kind(): SyntaxKind;
    }
    class MemberAccessExpressionSyntax extends SyntaxNode implements IMemberExpressionSyntax, ICallExpressionSyntax {
        expression: ILeftHandSideExpressionSyntax;
        dotToken: ISyntaxToken;
        name: ISyntaxToken;
        _memberExpressionBrand: any;
        _callExpressionBrand: any;
        _leftHandSideExpressionBrand: any;
        _postfixExpressionBrand: any;
        _unaryExpressionBrand: any;
        _expressionBrand: any;
        constructor(data: number, expression: ILeftHandSideExpressionSyntax, dotToken: ISyntaxToken, name: ISyntaxToken);
    }
    class InvocationExpressionSyntax extends SyntaxNode implements ICallExpressionSyntax {
        expression: ILeftHandSideExpressionSyntax;
        argumentList: ArgumentListSyntax;
        _callExpressionBrand: any;
        _leftHandSideExpressionBrand: any;
        _postfixExpressionBrand: any;
        _unaryExpressionBrand: any;
        _expressionBrand: any;
        constructor(data: number, expression: ILeftHandSideExpressionSyntax, argumentList: ArgumentListSyntax);
    }
    class ArrayLiteralExpressionSyntax extends SyntaxNode implements IPrimaryExpressionSyntax {
        openBracketToken: ISyntaxToken;
        expressions: IExpressionSyntax[];
        closeBracketToken: ISyntaxToken;
        _primaryExpressionBrand: any;
        _memberExpressionBrand: any;
        _leftHandSideExpressionBrand: any;
        _postfixExpressionBrand: any;
        _unaryExpressionBrand: any;
        _expressionBrand: any;
        constructor(data: number, openBracketToken: ISyntaxToken, expressions: IExpressionSyntax[], closeBracketToken: ISyntaxToken);
    }
    class ObjectLiteralExpressionSyntax extends SyntaxNode implements IPrimaryExpressionSyntax {
        openBraceToken: ISyntaxToken;
        propertyAssignments: IPropertyAssignmentSyntax[];
        closeBraceToken: ISyntaxToken;
        _primaryExpressionBrand: any;
        _memberExpressionBrand: any;
        _leftHandSideExpressionBrand: any;
        _postfixExpressionBrand: any;
        _unaryExpressionBrand: any;
        _expressionBrand: any;
        constructor(data: number, openBraceToken: ISyntaxToken, propertyAssignments: IPropertyAssignmentSyntax[], closeBraceToken: ISyntaxToken);
    }
    class ObjectCreationExpressionSyntax extends SyntaxNode implements IPrimaryExpressionSyntax {
        newKeyword: ISyntaxToken;
        expression: IMemberExpressionSyntax;
        argumentList: ArgumentListSyntax;
        _primaryExpressionBrand: any;
        _memberExpressionBrand: any;
        _leftHandSideExpressionBrand: any;
        _postfixExpressionBrand: any;
        _unaryExpressionBrand: any;
        _expressionBrand: any;
        constructor(data: number, newKeyword: ISyntaxToken, expression: IMemberExpressionSyntax, argumentList: ArgumentListSyntax);
    }
    class ParenthesizedExpressionSyntax extends SyntaxNode implements IPrimaryExpressionSyntax {
        openParenToken: ISyntaxToken;
        expression: IExpressionSyntax;
        closeParenToken: ISyntaxToken;
        _primaryExpressionBrand: any;
        _memberExpressionBrand: any;
        _leftHandSideExpressionBrand: any;
        _postfixExpressionBrand: any;
        _unaryExpressionBrand: any;
        _expressionBrand: any;
        constructor(data: number, openParenToken: ISyntaxToken, expression: IExpressionSyntax, closeParenToken: ISyntaxToken);
    }
    class ParenthesizedArrowFunctionExpressionSyntax extends SyntaxNode implements IUnaryExpressionSyntax {
        callSignature: CallSignatureSyntax;
        equalsGreaterThanToken: ISyntaxToken;
        block: BlockSyntax;
        expression: IExpressionSyntax;
        _unaryExpressionBrand: any;
        _expressionBrand: any;
        constructor(data: number, callSignature: CallSignatureSyntax, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax);
    }
    class SimpleArrowFunctionExpressionSyntax extends SyntaxNode implements IUnaryExpressionSyntax {
        parameter: ParameterSyntax;
        equalsGreaterThanToken: ISyntaxToken;
        block: BlockSyntax;
        expression: IExpressionSyntax;
        _unaryExpressionBrand: any;
        _expressionBrand: any;
        constructor(data: number, parameter: ParameterSyntax, equalsGreaterThanToken: ISyntaxToken, block: BlockSyntax, expression: IExpressionSyntax);
    }
    class CastExpressionSyntax extends SyntaxNode implements IUnaryExpressionSyntax {
        lessThanToken: ISyntaxToken;
        type: ITypeSyntax;
        greaterThanToken: ISyntaxToken;
        expression: IUnaryExpressionSyntax;
        _unaryExpressionBrand: any;
        _expressionBrand: any;
        constructor(data: number, lessThanToken: ISyntaxToken, type: ITypeSyntax, greaterThanToken: ISyntaxToken, expression: IUnaryExpressionSyntax);
    }
    class ElementAccessExpressionSyntax extends SyntaxNode implements IMemberExpressionSyntax, ICallExpressionSyntax {
        expression: ILeftHandSideExpressionSyntax;
        openBracketToken: ISyntaxToken;
        argumentExpression: IExpressionSyntax;
        closeBracketToken: ISyntaxToken;
        _memberExpressionBrand: any;
        _callExpressionBrand: any;
        _leftHandSideExpressionBrand: any;
        _postfixExpressionBrand: any;
        _unaryExpressionBrand: any;
        _expressionBrand: any;
        constructor(data: number, expression: ILeftHandSideExpressionSyntax, openBracketToken: ISyntaxToken, argumentExpression: IExpressionSyntax, closeBracketToken: ISyntaxToken);
    }
    class FunctionExpressionSyntax extends SyntaxNode implements IPrimaryExpressionSyntax {
        functionKeyword: ISyntaxToken;
        identifier: ISyntaxToken;
        callSignature: CallSignatureSyntax;
        block: BlockSyntax;
        _primaryExpressionBrand: any;
        _memberExpressionBrand: any;
        _leftHandSideExpressionBrand: any;
        _postfixExpressionBrand: any;
        _unaryExpressionBrand: any;
        _expressionBrand: any;
        constructor(data: number, functionKeyword: ISyntaxToken, identifier: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax);
    }
    class OmittedExpressionSyntax extends SyntaxNode implements IExpressionSyntax {
        _expressionBrand: any;
        constructor(data: number);
    }
    class VariableDeclarationSyntax extends SyntaxNode {
        varKeyword: ISyntaxToken;
        variableDeclarators: VariableDeclaratorSyntax[];
        constructor(data: number, varKeyword: ISyntaxToken, variableDeclarators: VariableDeclaratorSyntax[]);
    }
    class VariableDeclaratorSyntax extends SyntaxNode {
        propertyName: ISyntaxToken;
        typeAnnotation: TypeAnnotationSyntax;
        equalsValueClause: EqualsValueClauseSyntax;
        constructor(data: number, propertyName: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax);
    }
    class ArgumentListSyntax extends SyntaxNode {
        typeArgumentList: TypeArgumentListSyntax;
        openParenToken: ISyntaxToken;
        arguments: IExpressionSyntax[];
        closeParenToken: ISyntaxToken;
        constructor(data: number, typeArgumentList: TypeArgumentListSyntax, openParenToken: ISyntaxToken, _arguments: IExpressionSyntax[], closeParenToken: ISyntaxToken);
    }
    class ParameterListSyntax extends SyntaxNode {
        openParenToken: ISyntaxToken;
        parameters: ParameterSyntax[];
        closeParenToken: ISyntaxToken;
        constructor(data: number, openParenToken: ISyntaxToken, parameters: ParameterSyntax[], closeParenToken: ISyntaxToken);
    }
    class TypeArgumentListSyntax extends SyntaxNode {
        lessThanToken: ISyntaxToken;
        typeArguments: ITypeSyntax[];
        greaterThanToken: ISyntaxToken;
        constructor(data: number, lessThanToken: ISyntaxToken, typeArguments: ITypeSyntax[], greaterThanToken: ISyntaxToken);
    }
    class TypeParameterListSyntax extends SyntaxNode {
        lessThanToken: ISyntaxToken;
        typeParameters: TypeParameterSyntax[];
        greaterThanToken: ISyntaxToken;
        constructor(data: number, lessThanToken: ISyntaxToken, typeParameters: TypeParameterSyntax[], greaterThanToken: ISyntaxToken);
    }
    class HeritageClauseSyntax extends SyntaxNode {
        extendsOrImplementsKeyword: ISyntaxToken;
        typeNames: INameSyntax[];
        constructor(data: number, extendsOrImplementsKeyword: ISyntaxToken, typeNames: INameSyntax[]);
        kind(): SyntaxKind;
    }
    class EqualsValueClauseSyntax extends SyntaxNode {
        equalsToken: ISyntaxToken;
        value: IExpressionSyntax;
        constructor(data: number, equalsToken: ISyntaxToken, value: IExpressionSyntax);
    }
    class CaseSwitchClauseSyntax extends SyntaxNode implements ISwitchClauseSyntax {
        caseKeyword: ISyntaxToken;
        expression: IExpressionSyntax;
        colonToken: ISyntaxToken;
        statements: IStatementSyntax[];
        _switchClauseBrand: any;
        constructor(data: number, caseKeyword: ISyntaxToken, expression: IExpressionSyntax, colonToken: ISyntaxToken, statements: IStatementSyntax[]);
    }
    class DefaultSwitchClauseSyntax extends SyntaxNode implements ISwitchClauseSyntax {
        defaultKeyword: ISyntaxToken;
        colonToken: ISyntaxToken;
        statements: IStatementSyntax[];
        _switchClauseBrand: any;
        constructor(data: number, defaultKeyword: ISyntaxToken, colonToken: ISyntaxToken, statements: IStatementSyntax[]);
    }
    class ElseClauseSyntax extends SyntaxNode {
        elseKeyword: ISyntaxToken;
        statement: IStatementSyntax;
        constructor(data: number, elseKeyword: ISyntaxToken, statement: IStatementSyntax);
    }
    class CatchClauseSyntax extends SyntaxNode {
        catchKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        identifier: ISyntaxToken;
        typeAnnotation: TypeAnnotationSyntax;
        closeParenToken: ISyntaxToken;
        block: BlockSyntax;
        constructor(data: number, catchKeyword: ISyntaxToken, openParenToken: ISyntaxToken, identifier: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, closeParenToken: ISyntaxToken, block: BlockSyntax);
    }
    class FinallyClauseSyntax extends SyntaxNode {
        finallyKeyword: ISyntaxToken;
        block: BlockSyntax;
        constructor(data: number, finallyKeyword: ISyntaxToken, block: BlockSyntax);
    }
    class TypeParameterSyntax extends SyntaxNode {
        identifier: ISyntaxToken;
        constraint: ConstraintSyntax;
        constructor(data: number, identifier: ISyntaxToken, constraint: ConstraintSyntax);
    }
    class ConstraintSyntax extends SyntaxNode {
        extendsKeyword: ISyntaxToken;
        typeOrExpression: ISyntaxNodeOrToken;
        constructor(data: number, extendsKeyword: ISyntaxToken, typeOrExpression: ISyntaxNodeOrToken);
    }
    class SimplePropertyAssignmentSyntax extends SyntaxNode implements IPropertyAssignmentSyntax {
        propertyName: ISyntaxToken;
        colonToken: ISyntaxToken;
        expression: IExpressionSyntax;
        _propertyAssignmentBrand: any;
        constructor(data: number, propertyName: ISyntaxToken, colonToken: ISyntaxToken, expression: IExpressionSyntax);
    }
    class FunctionPropertyAssignmentSyntax extends SyntaxNode implements IPropertyAssignmentSyntax {
        propertyName: ISyntaxToken;
        callSignature: CallSignatureSyntax;
        block: BlockSyntax;
        _propertyAssignmentBrand: any;
        constructor(data: number, propertyName: ISyntaxToken, callSignature: CallSignatureSyntax, block: BlockSyntax);
    }
    class ParameterSyntax extends SyntaxNode {
        dotDotDotToken: ISyntaxToken;
        modifiers: ISyntaxToken[];
        identifier: ISyntaxToken;
        questionToken: ISyntaxToken;
        typeAnnotation: TypeAnnotationSyntax;
        equalsValueClause: EqualsValueClauseSyntax;
        constructor(data: number, dotDotDotToken: ISyntaxToken, modifiers: ISyntaxToken[], identifier: ISyntaxToken, questionToken: ISyntaxToken, typeAnnotation: TypeAnnotationSyntax, equalsValueClause: EqualsValueClauseSyntax);
    }
    class EnumElementSyntax extends SyntaxNode {
        propertyName: ISyntaxToken;
        equalsValueClause: EqualsValueClauseSyntax;
        constructor(data: number, propertyName: ISyntaxToken, equalsValueClause: EqualsValueClauseSyntax);
    }
    class TypeAnnotationSyntax extends SyntaxNode {
        colonToken: ISyntaxToken;
        type: ITypeSyntax;
        constructor(data: number, colonToken: ISyntaxToken, type: ITypeSyntax);
    }
    class ExternalModuleReferenceSyntax extends SyntaxNode implements IModuleReferenceSyntax {
        requireKeyword: ISyntaxToken;
        openParenToken: ISyntaxToken;
        stringLiteral: ISyntaxToken;
        closeParenToken: ISyntaxToken;
        _moduleReferenceBrand: any;
        constructor(data: number, requireKeyword: ISyntaxToken, openParenToken: ISyntaxToken, stringLiteral: ISyntaxToken, closeParenToken: ISyntaxToken);
    }
    class ModuleNameModuleReferenceSyntax extends SyntaxNode implements IModuleReferenceSyntax {
        moduleName: INameSyntax;
        _moduleReferenceBrand: any;
        constructor(data: number, moduleName: INameSyntax);
    }
}
declare module TypeScript {
    var syntaxDiagnosticsTime: number;
    class SyntaxTree {
        text: ISimpleText;
        private _isConcrete;
        private _sourceUnit;
        private _isDeclaration;
        private _parserDiagnostics;
        private _allDiagnostics;
        private _fileName;
        private _lineMap;
        private _languageVersion;
        private _amdDependencies;
        private _isExternalModule;
        constructor(isConcrete: boolean, sourceUnit: SourceUnitSyntax, isDeclaration: boolean, diagnostics: Diagnostic[], fileName: string, text: ISimpleText, languageVersion: ts.ScriptTarget);
        isConcrete(): boolean;
        sourceUnit(): SourceUnitSyntax;
        isDeclaration(): boolean;
        private computeDiagnostics();
        diagnostics(): Diagnostic[];
        fileName(): string;
        lineMap(): LineMap;
        languageVersion(): ts.ScriptTarget;
        private cacheSyntaxTreeInfo();
        private getAmdDependency(comment);
        isExternalModule(): boolean;
        amdDependencies(): string[];
    }
    function externalModuleIndicatorSpan(syntaxTree: SyntaxTree): TextSpan;
    function externalModuleIndicatorSpanWorker(syntaxTree: SyntaxTree, firstToken: ISyntaxToken): TextSpan;
}
declare module TypeScript {
    class Unicode {
        static unicodeES3IdentifierStart: number[];
        static unicodeES3IdentifierPart: number[];
        static unicodeES5IdentifierStart: number[];
        static unicodeES5IdentifierPart: number[];
        static lookupInUnicodeMap(code: number, map: number[]): boolean;
        static isIdentifierStart(code: number, languageVersion: ts.ScriptTarget): boolean;
        static isIdentifierPart(code: number, languageVersion: ts.ScriptTarget): boolean;
    }
}
declare module TypeScript.IncrementalParser {
    function parse(oldSyntaxTree: SyntaxTree, textChangeRange: TextChangeRange, newText: ISimpleText): SyntaxTree;
}
declare module ts {
    interface OutliningSpan {
        textSpan: TypeScript.TextSpan;
        hintSpan: TypeScript.TextSpan;
        bannerText: string;
        autoCollapse: boolean;
    }
    module OutliningElementsCollector {
        function collectElements(sourceFile: SourceFile): OutliningSpan[];
    }
}
declare module ts.NavigationBar {
    function getNavigationBarItems(sourceFile: SourceFile): NavigationBarItem[];
}
declare module TypeScript.Services.Breakpoints {
    function getBreakpointLocation(syntaxTree: SyntaxTree, askedPos: number): TextSpan;
}
declare module TypeScript.Indentation {
    function columnForEndOfTokenAtPosition(syntaxTree: SyntaxTree, position: number, options: FormattingOptions): number;
    function columnForStartOfTokenAtPosition(syntaxTree: SyntaxTree, position: number, options: FormattingOptions): number;
    function columnForStartOfFirstTokenInLineContainingPosition(syntaxTree: SyntaxTree, position: number, options: FormattingOptions): number;
    function columnForPositionInString(input: string, position: number, options: FormattingOptions): number;
    function indentationString(column: number, options: FormattingOptions): string;
    function firstNonWhitespacePosition(value: string): number;
}
declare module ts.SignatureHelp {
    function getSignatureHelpItems(sourceFile: SourceFile, position: number, typeInfoResolver: TypeChecker, cancellationToken: CancellationTokenObject): SignatureHelpItems;
}
declare module ts {
    interface ListItemInfo {
        listItemIndex: number;
        list: Node;
    }
    function findListItemInfo(node: Node): ListItemInfo;
    function findChildOfKind(n: Node, kind: SyntaxKind, sourceFile?: SourceFile): Node;
    function findContainingList(node: Node): Node;
    function findListItemIndexContainingPosition(list: Node, position: number): number;
    function getTouchingWord(sourceFile: SourceFile, position: number): Node;
    function getTouchingPropertyName(sourceFile: SourceFile, position: number): Node;
    function getTouchingToken(sourceFile: SourceFile, position: number, includeItemAtEndPosition?: (n: Node) => boolean): Node;
    function getTokenAtPosition(sourceFile: SourceFile, position: number): Node;
    function findTokenOnLeftOfPosition(file: SourceFile, position: number): Node;
    function findNextToken(previousToken: Node, parent: Node): Node;
    function findPrecedingToken(position: number, sourceFile: SourceFile, startNode?: Node): Node;
    function isToken(n: Node): boolean;
}
declare module TypeScript.Services.Formatting {
    interface ITextSnapshot {
        getLength(): number;
        getText(span: TextSpan): string;
        getLineNumberFromPosition(position: number): number;
        getLineFromPosition(position: number): ITextSnapshotLine;
        getLineFromLineNumber(lineNumber: number): ITextSnapshotLine;
    }
    class TextSnapshot implements ITextSnapshot {
        private snapshot;
        private lines;
        constructor(snapshot: ISimpleText);
        getLength(): number;
        getText(span: TextSpan): string;
        getLineNumberFromPosition(position: number): number;
        getLineFromPosition(position: number): ITextSnapshotLine;
        getLineFromLineNumber(lineNumber: number): ITextSnapshotLine;
        private getLineFromLineNumberWorker(lineNumber);
    }
}
declare module TypeScript.Services.Formatting {
    interface ITextSnapshotLine {
        snapshot(): ITextSnapshot;
        start(): SnapshotPoint;
        startPosition(): number;
        end(): SnapshotPoint;
        endPosition(): number;
        endIncludingLineBreak(): SnapshotPoint;
        endIncludingLineBreakPosition(): number;
        length(): number;
        lineNumber(): number;
        getText(): string;
    }
    class TextSnapshotLine implements ITextSnapshotLine {
        private _snapshot;
        private _lineNumber;
        private _start;
        private _end;
        private _lineBreak;
        constructor(_snapshot: ITextSnapshot, _lineNumber: number, _start: number, _end: number, _lineBreak: string);
        snapshot(): ITextSnapshot;
        start(): SnapshotPoint;
        startPosition(): number;
        end(): SnapshotPoint;
        endPosition(): number;
        endIncludingLineBreak(): SnapshotPoint;
        endIncludingLineBreakPosition(): number;
        length(): number;
        lineNumber(): number;
        getText(): string;
    }
}
declare module TypeScript.Services.Formatting {
    class SnapshotPoint {
        snapshot: ITextSnapshot;
        position: number;
        constructor(snapshot: ITextSnapshot, position: number);
        getContainingLine(): ITextSnapshotLine;
        add(offset: number): SnapshotPoint;
    }
}
declare module TypeScript.Services.Formatting {
    class FormattingContext {
        private snapshot;
        formattingRequestKind: FormattingRequestKind;
        currentTokenSpan: TokenSpan;
        nextTokenSpan: TokenSpan;
        contextNode: IndentationNodeContext;
        currentTokenParent: IndentationNodeContext;
        nextTokenParent: IndentationNodeContext;
        private contextNodeAllOnSameLine;
        private nextNodeAllOnSameLine;
        private tokensAreOnSameLine;
        private contextNodeBlockIsOnOneLine;
        private nextNodeBlockIsOnOneLine;
        constructor(snapshot: ITextSnapshot, formattingRequestKind: FormattingRequestKind);
        updateContext(currentTokenSpan: TokenSpan, currentTokenParent: IndentationNodeContext, nextTokenSpan: TokenSpan, nextTokenParent: IndentationNodeContext, commonParent: IndentationNodeContext): void;
        ContextNodeAllOnSameLine(): boolean;
        NextNodeAllOnSameLine(): boolean;
        TokensAreOnSameLine(): boolean;
        ContextNodeBlockIsOnOneLine(): boolean;
        NextNodeBlockIsOnOneLine(): boolean;
        NodeIsOnOneLine(node: IndentationNodeContext): boolean;
        BlockIsOnOneLine(node: IndentationNodeContext): boolean;
    }
}
declare module TypeScript.Services.Formatting {
    class FormattingManager {
        private syntaxTree;
        private snapshot;
        private rulesProvider;
        private options;
        constructor(syntaxTree: SyntaxTree, snapshot: ITextSnapshot, rulesProvider: RulesProvider, editorOptions: ts.EditorOptions);
        formatSelection(minChar: number, limChar: number): ts.TextChange[];
        formatDocument(): ts.TextChange[];
        formatOnSemicolon(caretPosition: number): ts.TextChange[];
        formatOnClosingCurlyBrace(caretPosition: number): ts.TextChange[];
        formatOnEnter(caretPosition: number): ts.TextChange[];
        private formatSpan(span, formattingRequestKind);
    }
}
declare module TypeScript.Services.Formatting {
    enum FormattingRequestKind {
        FormatDocument = 0,
        FormatSelection = 1,
        FormatOnEnter = 2,
        FormatOnSemicolon = 3,
        FormatOnClosingCurlyBrace = 4,
        FormatOnPaste = 5,
    }
}
declare module TypeScript.Services.Formatting {
    class Rule {
        Descriptor: RuleDescriptor;
        Operation: RuleOperation;
        Flag: RuleFlags;
        constructor(Descriptor: RuleDescriptor, Operation: RuleOperation, Flag?: RuleFlags);
        toString(): string;
    }
}
declare module TypeScript.Services.Formatting {
    enum RuleAction {
        Ignore = 0,
        Space = 1,
        NewLine = 2,
        Delete = 3,
    }
}
declare module TypeScript.Services.Formatting {
    class RuleDescriptor {
        LeftTokenRange: Shared.TokenRange;
        RightTokenRange: Shared.TokenRange;
        constructor(LeftTokenRange: Shared.TokenRange, RightTokenRange: Shared.TokenRange);
        toString(): string;
        static create1(left: SyntaxKind, right: SyntaxKind): RuleDescriptor;
        static create2(left: Shared.TokenRange, right: SyntaxKind): RuleDescriptor;
        static create3(left: SyntaxKind, right: Shared.TokenRange): RuleDescriptor;
        static create4(left: Shared.TokenRange, right: Shared.TokenRange): RuleDescriptor;
    }
}
declare module TypeScript.Services.Formatting {
    enum RuleFlags {
        None = 0,
        CanDeleteNewLines = 1,
    }
}
declare module TypeScript.Services.Formatting {
    class RuleOperation {
        Context: RuleOperationContext;
        Action: RuleAction;
        constructor();
        toString(): string;
        static create1(action: RuleAction): RuleOperation;
        static create2(context: RuleOperationContext, action: RuleAction): RuleOperation;
    }
}
declare module TypeScript.Services.Formatting {
    class RuleOperationContext {
        private customContextChecks;
        constructor(...funcs: {
            (context: FormattingContext): boolean;
        }[]);
        static Any: RuleOperationContext;
        IsAny(): boolean;
        InContext(context: FormattingContext): boolean;
    }
}
declare module TypeScript.Services.Formatting {
    class Rules {
        getRuleName(rule: Rule): any;
        [name: string]: any;
        IgnoreBeforeComment: Rule;
        IgnoreAfterLineComment: Rule;
        NoSpaceBeforeSemicolon: Rule;
        NoSpaceBeforeColon: Rule;
        NoSpaceBeforeQMark: Rule;
        SpaceAfterColon: Rule;
        SpaceAfterQMark: Rule;
        SpaceAfterSemicolon: Rule;
        SpaceAfterCloseBrace: Rule;
        SpaceBetweenCloseBraceAndElse: Rule;
        SpaceBetweenCloseBraceAndWhile: Rule;
        NoSpaceAfterCloseBrace: Rule;
        NoSpaceBeforeDot: Rule;
        NoSpaceAfterDot: Rule;
        NoSpaceBeforeOpenBracket: Rule;
        NoSpaceAfterOpenBracket: Rule;
        NoSpaceBeforeCloseBracket: Rule;
        NoSpaceAfterCloseBracket: Rule;
        SpaceAfterOpenBrace: Rule;
        SpaceBeforeCloseBrace: Rule;
        NoSpaceBetweenEmptyBraceBrackets: Rule;
        NewLineAfterOpenBraceInBlockContext: Rule;
        NewLineBeforeCloseBraceInBlockContext: Rule;
        NoSpaceAfterUnaryPrefixOperator: Rule;
        NoSpaceAfterUnaryPreincrementOperator: Rule;
        NoSpaceAfterUnaryPredecrementOperator: Rule;
        NoSpaceBeforeUnaryPostincrementOperator: Rule;
        NoSpaceBeforeUnaryPostdecrementOperator: Rule;
        SpaceAfterPostincrementWhenFollowedByAdd: Rule;
        SpaceAfterAddWhenFollowedByUnaryPlus: Rule;
        SpaceAfterAddWhenFollowedByPreincrement: Rule;
        SpaceAfterPostdecrementWhenFollowedBySubtract: Rule;
        SpaceAfterSubtractWhenFollowedByUnaryMinus: Rule;
        SpaceAfterSubtractWhenFollowedByPredecrement: Rule;
        NoSpaceBeforeComma: Rule;
        SpaceAfterCertainKeywords: Rule;
        NoSpaceBeforeOpenParenInFuncCall: Rule;
        SpaceAfterFunctionInFuncDecl: Rule;
        NoSpaceBeforeOpenParenInFuncDecl: Rule;
        SpaceAfterVoidOperator: Rule;
        NoSpaceBetweenReturnAndSemicolon: Rule;
        SpaceBetweenStatements: Rule;
        SpaceAfterTryFinally: Rule;
        SpaceAfterGetSetInMember: Rule;
        SpaceBeforeBinaryKeywordOperator: Rule;
        SpaceAfterBinaryKeywordOperator: Rule;
        NoSpaceAfterConstructor: Rule;
        NoSpaceAfterModuleImport: Rule;
        SpaceAfterCertainTypeScriptKeywords: Rule;
        SpaceBeforeCertainTypeScriptKeywords: Rule;
        SpaceAfterModuleName: Rule;
        SpaceAfterArrow: Rule;
        NoSpaceAfterEllipsis: Rule;
        NoSpaceAfterOptionalParameters: Rule;
        NoSpaceBeforeOpenAngularBracket: Rule;
        NoSpaceBetweenCloseParenAndAngularBracket: Rule;
        NoSpaceAfterOpenAngularBracket: Rule;
        NoSpaceBeforeCloseAngularBracket: Rule;
        NoSpaceAfterCloseAngularBracket: Rule;
        NoSpaceBetweenEmptyInterfaceBraceBrackets: Rule;
        HighPriorityCommonRules: Rule[];
        LowPriorityCommonRules: Rule[];
        SpaceAfterComma: Rule;
        NoSpaceAfterComma: Rule;
        SpaceBeforeBinaryOperator: Rule;
        SpaceAfterBinaryOperator: Rule;
        NoSpaceBeforeBinaryOperator: Rule;
        NoSpaceAfterBinaryOperator: Rule;
        SpaceAfterKeywordInControl: Rule;
        NoSpaceAfterKeywordInControl: Rule;
        FunctionOpenBraceLeftTokenRange: Shared.TokenRange;
        SpaceBeforeOpenBraceInFunction: Rule;
        NewLineBeforeOpenBraceInFunction: Rule;
        TypeScriptOpenBraceLeftTokenRange: Shared.TokenRange;
        SpaceBeforeOpenBraceInTypeScriptDeclWithBlock: Rule;
        NewLineBeforeOpenBraceInTypeScriptDeclWithBlock: Rule;
        ControlOpenBraceLeftTokenRange: Shared.TokenRange;
        SpaceBeforeOpenBraceInControl: Rule;
        NewLineBeforeOpenBraceInControl: Rule;
        SpaceAfterSemicolonInFor: Rule;
        NoSpaceAfterSemicolonInFor: Rule;
        SpaceAfterOpenParen: Rule;
        SpaceBeforeCloseParen: Rule;
        NoSpaceBetweenParens: Rule;
        NoSpaceAfterOpenParen: Rule;
        NoSpaceBeforeCloseParen: Rule;
        SpaceAfterAnonymousFunctionKeyword: Rule;
        NoSpaceAfterAnonymousFunctionKeyword: Rule;
        constructor();
        static IsForContext(context: FormattingContext): boolean;
        static IsNotForContext(context: FormattingContext): boolean;
        static IsBinaryOpContext(context: FormattingContext): boolean;
        static IsNotBinaryOpContext(context: FormattingContext): boolean;
        static IsSameLineTokenOrBeforeMultilineBlockContext(context: FormattingContext): boolean;
        static IsBeforeMultilineBlockContext(context: FormattingContext): boolean;
        static IsMultilineBlockContext(context: FormattingContext): boolean;
        static IsSingleLineBlockContext(context: FormattingContext): boolean;
        static IsBlockContext(context: FormattingContext): boolean;
        static IsBeforeBlockContext(context: FormattingContext): boolean;
        static NodeIsBlockContext(node: IndentationNodeContext): boolean;
        static IsFunctionDeclContext(context: FormattingContext): boolean;
        static IsTypeScriptDeclWithBlockContext(context: FormattingContext): boolean;
        static NodeIsTypeScriptDeclWithBlockContext(node: IndentationNodeContext): boolean;
        static IsAfterCodeBlockContext(context: FormattingContext): boolean;
        static IsControlDeclContext(context: FormattingContext): boolean;
        static IsObjectContext(context: FormattingContext): boolean;
        static IsFunctionCallContext(context: FormattingContext): boolean;
        static IsNewContext(context: FormattingContext): boolean;
        static IsFunctionCallOrNewContext(context: FormattingContext): boolean;
        static IsSameLineTokenContext(context: FormattingContext): boolean;
        static IsNotFormatOnEnter(context: FormattingContext): boolean;
        static IsModuleDeclContext(context: FormattingContext): boolean;
        static IsObjectTypeContext(context: FormattingContext): boolean;
        static IsTypeArgumentOrParameter(tokenKind: SyntaxKind, parentKind: SyntaxKind): boolean;
        static IsTypeArgumentOrParameterContext(context: FormattingContext): boolean;
        static IsVoidOpContext(context: FormattingContext): boolean;
    }
}
declare module TypeScript.Services.Formatting {
    class RulesMap {
        map: RulesBucket[];
        mapRowLength: number;
        constructor();
        static create(rules: Rule[]): RulesMap;
        Initialize(rules: Rule[]): RulesBucket[];
        FillRules(rules: Rule[], rulesBucketConstructionStateList: RulesBucketConstructionState[]): void;
        private GetRuleBucketIndex(row, column);
        private FillRule(rule, rulesBucketConstructionStateList);
        GetRule(context: FormattingContext): Rule;
    }
    enum RulesPosition {
        IgnoreRulesSpecific = 0,
        IgnoreRulesAny,
        ContextRulesSpecific,
        ContextRulesAny,
        NoContextRulesSpecific,
        NoContextRulesAny,
    }
    class RulesBucketConstructionState {
        private rulesInsertionIndexBitmap;
        constructor();
        GetInsertionIndex(maskPosition: RulesPosition): number;
        IncreaseInsertionIndex(maskPosition: RulesPosition): void;
    }
    class RulesBucket {
        private rules;
        constructor();
        Rules(): Rule[];
        AddRule(rule: Rule, specificTokens: boolean, constructionState: RulesBucketConstructionState[], rulesBucketIndex: number): void;
    }
}
declare module TypeScript.Services.Formatting {
    class RulesProvider {
        private logger;
        private globalRules;
        private options;
        private activeRules;
        private rulesMap;
        constructor(logger: Logger);
        getRuleName(rule: Rule): string;
        getRuleByName(name: string): Rule;
        getRulesMap(): RulesMap;
        ensureUpToDate(options: ts.FormatCodeOptions): void;
        private createActiveRules(options);
    }
}
declare module TypeScript.Services.Formatting {
    class TextEditInfo {
        position: number;
        length: number;
        replaceWith: string;
        constructor(position: number, length: number, replaceWith: string);
        toString(): string;
    }
}
declare module TypeScript.Services.Formatting {
    module Shared {
        interface ITokenAccess {
            GetTokens(): SyntaxKind[];
            Contains(token: SyntaxKind): boolean;
        }
        class TokenRangeAccess implements ITokenAccess {
            private tokens;
            constructor(from: SyntaxKind, to: SyntaxKind, except: SyntaxKind[]);
            GetTokens(): SyntaxKind[];
            Contains(token: SyntaxKind): boolean;
            toString(): string;
        }
        class TokenValuesAccess implements ITokenAccess {
            private tokens;
            constructor(tks: SyntaxKind[]);
            GetTokens(): SyntaxKind[];
            Contains(token: SyntaxKind): boolean;
        }
        class TokenSingleValueAccess implements ITokenAccess {
            token: SyntaxKind;
            constructor(token: SyntaxKind);
            GetTokens(): SyntaxKind[];
            Contains(tokenValue: SyntaxKind): boolean;
            toString(): string;
        }
        class TokenAllAccess implements ITokenAccess {
            GetTokens(): SyntaxKind[];
            Contains(tokenValue: SyntaxKind): boolean;
            toString(): string;
        }
        class TokenRange {
            tokenAccess: ITokenAccess;
            constructor(tokenAccess: ITokenAccess);
            static FromToken(token: SyntaxKind): TokenRange;
            static FromTokens(tokens: SyntaxKind[]): TokenRange;
            static FromRange(f: SyntaxKind, to: SyntaxKind, except?: SyntaxKind[]): TokenRange;
            static AllTokens(): TokenRange;
            GetTokens(): SyntaxKind[];
            Contains(token: SyntaxKind): boolean;
            toString(): string;
            static Any: TokenRange;
            static AnyIncludingMultilineComments: TokenRange;
            static Keywords: TokenRange;
            static Operators: TokenRange;
            static BinaryOperators: TokenRange;
            static BinaryKeywordOperators: TokenRange;
            static ReservedKeywords: TokenRange;
            static UnaryPrefixOperators: TokenRange;
            static UnaryPrefixExpressions: TokenRange;
            static UnaryPreincrementExpressions: TokenRange;
            static UnaryPostincrementExpressions: TokenRange;
            static UnaryPredecrementExpressions: TokenRange;
            static UnaryPostdecrementExpressions: TokenRange;
            static Comments: TokenRange;
            static TypeNames: TokenRange;
        }
    }
}
declare module TypeScript.Services.Formatting {
    class TokenSpan extends TextSpan {
        kind: SyntaxKind;
        constructor(kind: SyntaxKind, start: number, length: number);
    }
}
declare module TypeScript.Services.Formatting {
    class IndentationNodeContext {
        private _node;
        private _parent;
        private _fullStart;
        private _indentationAmount;
        private _childIndentationAmountDelta;
        private _depth;
        private _hasSkippedOrMissingTokenChild;
        constructor(parent: IndentationNodeContext, node: ISyntaxNode, fullStart: number, indentationAmount: number, childIndentationAmountDelta: number);
        parent(): IndentationNodeContext;
        node(): ISyntaxNode;
        fullStart(): number;
        fullWidth(): number;
        start(): number;
        end(): number;
        indentationAmount(): number;
        childIndentationAmountDelta(): number;
        depth(): number;
        kind(): SyntaxKind;
        hasSkippedOrMissingTokenChild(): boolean;
        clone(pool: IndentationNodeContextPool): IndentationNodeContext;
        update(parent: IndentationNodeContext, node: ISyntaxNode, fullStart: number, indentationAmount: number, childIndentationAmountDelta: number): void;
    }
}
declare module TypeScript.Services.Formatting {
    class IndentationNodeContextPool {
        private nodes;
        getNode(parent: IndentationNodeContext, node: ISyntaxNode, fullStart: number, indentationLevel: number, childIndentationLevelDelta: number): IndentationNodeContext;
        releaseNode(node: IndentationNodeContext, recursive?: boolean): void;
    }
}
declare module TypeScript.Services.Formatting {
    class IndentationTrackingWalker extends SyntaxWalker {
        options: FormattingOptions;
        private _position;
        private _parent;
        private _textSpan;
        private _snapshot;
        private _lastTriviaWasNewLine;
        private _indentationNodeContextPool;
        private _text;
        constructor(textSpan: TextSpan, sourceUnit: SourceUnitSyntax, snapshot: ITextSnapshot, indentFirstToken: boolean, options: FormattingOptions);
        position(): number;
        parent(): IndentationNodeContext;
        textSpan(): TextSpan;
        snapshot(): ITextSnapshot;
        indentationNodeContextPool(): IndentationNodeContextPool;
        forceIndentNextToken(tokenStart: number): void;
        forceSkipIndentingNextToken(tokenStart: number): void;
        indentToken(token: ISyntaxToken, indentationAmount: number, commentIndentationAmount: number): void;
        visitTokenInSpan(token: ISyntaxToken): void;
        visitToken(token: ISyntaxToken): void;
        visitNode(node: ISyntaxNode): void;
        private getTokenIndentationAmount(token);
        private getCommentIndentationAmount(token);
        private getNodeIndentation(node, newLineInsertedByFormatting?);
        private shouldIndentBlockInParent(parent);
        private forceRecomputeIndentationOfParent(tokenStart, newLineAdded);
    }
}
declare module TypeScript.Services.Formatting {
    class MultipleTokenIndenter extends IndentationTrackingWalker {
        private _edits;
        constructor(textSpan: TextSpan, sourceUnit: SourceUnitSyntax, snapshot: ITextSnapshot, indentFirstToken: boolean, options: FormattingOptions);
        indentToken(token: ISyntaxToken, indentationAmount: number, commentIndentationAmount: number): void;
        edits(): TextEditInfo[];
        recordEdit(position: number, length: number, replaceWith: string): void;
        private recordIndentationEditsForToken(token, indentationString, commentIndentationString);
        private recordIndentationEditsForSingleLineOrSkippedText(trivia, fullStart, indentationString);
        private recordIndentationEditsForWhitespace(trivia, fullStart, indentationString);
        private recordIndentationEditsForMultiLineComment(trivia, fullStart, indentationString, leadingWhiteSpace, firstLineAlreadyIndented);
        private recordIndentationEditsForSegment(segment, fullStart, indentationColumns, whiteSpaceColumnsInFirstSegment);
    }
}
declare module TypeScript.Services.Formatting {
    class Formatter extends MultipleTokenIndenter {
        private previousTokenSpan;
        private previousTokenParent;
        private scriptHasErrors;
        private rulesProvider;
        private formattingRequestKind;
        private formattingContext;
        constructor(textSpan: TextSpan, sourceUnit: SourceUnitSyntax, indentFirstToken: boolean, options: FormattingOptions, snapshot: ITextSnapshot, rulesProvider: RulesProvider, formattingRequestKind: FormattingRequestKind);
        static getEdits(textSpan: TextSpan, sourceUnit: SourceUnitSyntax, options: FormattingOptions, indentFirstToken: boolean, snapshot: ITextSnapshot, rulesProvider: RulesProvider, formattingRequestKind: FormattingRequestKind): TextEditInfo[];
        visitTokenInSpan(token: ISyntaxToken): void;
        private processToken(token);
        private processTrivia(triviaList, fullStart);
        private findCommonParents(parent1, parent2);
        private formatPair(t1, t1Parent, t2, t2Parent);
        private getLineNumber(span);
        private trimWhitespaceInLineRange(startLine, endLine, token?);
        private trimWhitespace(line, token?);
        private RecordRuleEdits(rule, t1, t2);
    }
}
declare module ts.formatting {
    module SmartIndenter {
        function getIndentation(position: number, sourceFile: SourceFile, options: TypeScript.FormattingOptions): number;
    }
}
declare module TypeScript {
    interface Logger {
        log(s: string): void;
    }
    class NullLogger implements Logger {
        log(s: string): void;
    }
}
declare module TypeScript {
    function createIntrinsicsObject<T>(): ts.Map<T>;
}
declare module TypeScript {
    class Comment {
        private _trivia;
        endsLine: boolean;
        _start: number;
        _end: number;
        constructor(_trivia: ISyntaxTrivia, endsLine: boolean, _start: number, _end: number);
        start(): number;
        end(): number;
        fullText(): string;
        kind(): SyntaxKind;
        structuralEquals(ast: Comment, includingPosition: boolean): boolean;
    }
}
declare module TypeScript {
    class AstWalkOptions {
        goChildren: boolean;
        stopWalking: boolean;
    }
    interface IAstWalker {
        options: AstWalkOptions;
        state: any;
    }
    class AstWalkerFactory {
        walk(ast: ISyntaxElement, pre: (ast: ISyntaxElement, walker: IAstWalker) => void, post?: (ast: ISyntaxElement, walker: IAstWalker) => void, state?: any): void;
        simpleWalk(ast: ISyntaxElement, pre: (ast: ISyntaxElement, state: any) => void, post?: (ast: ISyntaxElement, state: any) => void, state?: any): void;
    }
    function getAstWalkerFactory(): AstWalkerFactory;
}
declare module TypeScript.ASTHelpers {
    function isValidAstNode(ast: ISyntaxElement): boolean;
    function isValidSpan(ast: ISpan): boolean;
    function getAstAtPosition(script: ISyntaxElement, pos: number, useTrailingTriviaAsLimChar?: boolean, forceInclusive?: boolean): ISyntaxElement;
    function getExtendsHeritageClause(clauses: HeritageClauseSyntax[]): HeritageClauseSyntax;
    function getImplementsHeritageClause(clauses: HeritageClauseSyntax[]): HeritageClauseSyntax;
    function isCallExpression(ast: ISyntaxElement): boolean;
    function isCallExpressionTarget(ast: ISyntaxElement): boolean;
    function getCallExpressionTarget(ast: ISyntaxElement): ISyntaxElement;
    function isDeclarationASTOrDeclarationNameAST(ast: ISyntaxElement): boolean;
    function getEnclosingParameterForInitializer(ast: ISyntaxElement): ParameterSyntax;
    function getEnclosingMemberDeclaration(ast: ISyntaxElement): ISyntaxElement;
    function isNameOfFunction(ast: ISyntaxElement): boolean;
    function isNameOfMemberFunction(ast: ISyntaxElement): boolean;
    function isNameOfMemberAccessExpression(ast: ISyntaxElement): boolean;
    function isRightSideOfQualifiedName(ast: ISyntaxElement): boolean;
    function parentIsModuleDeclaration(ast: ISyntaxElement): boolean;
    function isDeclarationAST(ast: ISyntaxElement): boolean;
    function preComments(element: ISyntaxElement, text: ISimpleText): Comment[];
    function postComments(element: ISyntaxElement, text: ISimpleText): Comment[];
    function convertTokenLeadingComments(token: ISyntaxToken, text: ISimpleText): Comment[];
    function convertTokenTrailingComments(token: ISyntaxToken, text: ISimpleText): Comment[];
    function docComments(ast: ISyntaxElement, text: ISimpleText): Comment[];
    function isDocComment(comment: Comment): boolean;
    function getParameterList(ast: ISyntaxElement): ParameterListSyntax;
    function getType(ast: ISyntaxElement): ITypeSyntax;
    function getVariableDeclaratorModifiers(variableDeclarator: VariableDeclaratorSyntax): ISyntaxToken[];
    function isIntegerLiteralAST(expression: ISyntaxElement): boolean;
    function getEnclosingModuleDeclaration(ast: ISyntaxElement): ModuleDeclarationSyntax;
    function getModuleDeclarationFromNameAST(ast: ISyntaxElement): ModuleDeclarationSyntax;
    function isLastNameOfModule(ast: ModuleDeclarationSyntax, astName: ISyntaxElement): boolean;
    function getNameOfIdentifierOrQualifiedName(name: ISyntaxElement): string;
    function getModuleNames(name: ISyntaxElement, result?: ISyntaxToken[]): ISyntaxToken[];
}
declare module TypeScript {
    function stripStartAndEndQuotes(str: string): string;
    function isSingleQuoted(str: string): boolean;
    function isDoubleQuoted(str: string): boolean;
    function isQuoted(str: string): boolean;
    function quoteStr(str: string): string;
    function switchToForwardSlashes(path: string): string;
    function trimModName(modName: string): string;
    function getDeclareFilePath(fname: string): string;
    function isTSFile(fname: string): boolean;
    function isDTSFile(fname: string): boolean;
    function getPrettyName(modPath: string, quote?: boolean, treatAsFileName?: boolean): any;
    function getPathComponents(path: string): string[];
    function getRelativePathToFixedPath(fixedModFilePath: string, absoluteModPath: string, isAbsoultePathURL?: boolean): string;
    function changePathToDTS(modPath: string): string;
    function isRelative(path: string): boolean;
    function isRooted(path: string): boolean;
    function getRootFilePath(outFname: string): string;
    function filePathComponents(fullPath: string): string[];
    function filePath(fullPath: string): string;
    function convertToDirectoryPath(dirPath: string): string;
    function normalizePath(path: string): string;
}
declare module ts {
    interface Node {
        getSourceFile(): SourceFile;
        getChildCount(sourceFile?: SourceFile): number;
        getChildAt(index: number, sourceFile?: SourceFile): Node;
        getChildren(sourceFile?: SourceFile): Node[];
        getStart(sourceFile?: SourceFile): number;
        getFullStart(): number;
        getEnd(): number;
        getWidth(sourceFile?: SourceFile): number;
        getFullWidth(): number;
        getLeadingTriviaWidth(sourceFile?: SourceFile): number;
        getFullText(sourceFile?: SourceFile): string;
        getFirstToken(sourceFile?: SourceFile): Node;
        getLastToken(sourceFile?: SourceFile): Node;
    }
    interface Symbol {
        getFlags(): SymbolFlags;
        getName(): string;
        getDeclarations(): Declaration[];
        getDocumentationComment(): SymbolDisplayPart[];
    }
    interface Type {
        getFlags(): TypeFlags;
        getSymbol(): Symbol;
        getProperties(): Symbol[];
        getProperty(propertyName: string): Symbol;
        getApparentProperties(): Symbol[];
        getCallSignatures(): Signature[];
        getConstructSignatures(): Signature[];
        getStringIndexType(): Type;
        getNumberIndexType(): Type;
    }
    interface Signature {
        getDeclaration(): SignatureDeclaration;
        getTypeParameters(): Type[];
        getParameters(): Symbol[];
        getReturnType(): Type;
        getDocumentationComment(): SymbolDisplayPart[];
    }
    interface SourceFile {
        getSourceUnit(): TypeScript.SourceUnitSyntax;
        getSyntaxTree(): TypeScript.SyntaxTree;
        getScriptSnapshot(): TypeScript.IScriptSnapshot;
        getNamedDeclarations(): Declaration[];
        update(scriptSnapshot: TypeScript.IScriptSnapshot, version: string, isOpen: boolean, textChangeRange: TypeScript.TextChangeRange): SourceFile;
    }
    interface Logger {
        log(s: string): void;
    }
    interface LanguageServiceHost extends Logger {
        getCompilationSettings(): CompilerOptions;
        getScriptFileNames(): string[];
        getScriptVersion(fileName: string): string;
        getScriptIsOpen(fileName: string): boolean;
        getScriptSnapshot(fileName: string): TypeScript.IScriptSnapshot;
        getLocalizedDiagnosticMessages(): any;
        getCancellationToken(): CancellationToken;
        getCurrentDirectory(): string;
        getDefaultLibFilename(): string;
    }
    interface LanguageService {
        cleanupSemanticCache(): void;
        getSyntacticDiagnostics(fileName: string): Diagnostic[];
        getSemanticDiagnostics(fileName: string): Diagnostic[];
        getCompilerOptionsDiagnostics(): Diagnostic[];
        getSyntacticClassifications(fileName: string, span: TypeScript.TextSpan): ClassifiedSpan[];
        getSemanticClassifications(fileName: string, span: TypeScript.TextSpan): ClassifiedSpan[];
        getCompletionsAtPosition(fileName: string, position: number, isMemberCompletion: boolean): CompletionInfo;
        getCompletionEntryDetails(fileName: string, position: number, entryName: string): CompletionEntryDetails;
        getQuickInfoAtPosition(fileName: string, position: number): QuickInfo;
        getNameOrDottedNameSpan(fileName: string, startPos: number, endPos: number): TypeScript.TextSpan;
        getBreakpointStatementAtPosition(fileName: string, position: number): TypeScript.TextSpan;
        getSignatureHelpItems(fileName: string, position: number): SignatureHelpItems;
        getSignatureAtPosition(fileName: string, position: number): SignatureInfo;
        getRenameInfo(fileName: string, position: number): RenameInfo;
        findRenameLocations(fileName: string, position: number, findInStrings: boolean, findInComments: boolean): RenameLocation[];
        getDefinitionAtPosition(fileName: string, position: number): DefinitionInfo[];
        getReferencesAtPosition(fileName: string, position: number): ReferenceEntry[];
        getOccurrencesAtPosition(fileName: string, position: number): ReferenceEntry[];
        getImplementorsAtPosition(fileName: string, position: number): ReferenceEntry[];
        getNavigateToItems(searchValue: string): NavigateToItem[];
        getNavigationBarItems(fileName: string): NavigationBarItem[];
        getOutliningSpans(fileName: string): OutliningSpan[];
        getTodoComments(fileName: string, descriptors: TodoCommentDescriptor[]): TodoComment[];
        getBraceMatchingAtPosition(fileName: string, position: number): TypeScript.TextSpan[];
        getIndentationAtPosition(fileName: string, position: number, options: EditorOptions): number;
        getFormattingEditsForRange(fileName: string, start: number, end: number, options: FormatCodeOptions): TextChange[];
        getFormattingEditsForDocument(fileName: string, options: FormatCodeOptions): TextChange[];
        getFormattingEditsAfterKeystroke(fileName: string, position: number, key: string, options: FormatCodeOptions): TextChange[];
        getEmitOutput(fileName: string): EmitOutput;
        getSourceFile(filename: string): SourceFile;
        dispose(): void;
    }
    interface SignatureInfo {
        actual: ActualSignatureInfo;
        formal: FormalSignatureItemInfo[];
        activeFormal: number;
    }
    interface FormalSignatureItemInfo {
        signatureInfo: string;
        typeParameters: FormalTypeParameterInfo[];
        parameters: FormalParameterInfo[];
        docComment: string;
    }
    interface FormalTypeParameterInfo {
        name: string;
        docComment: string;
        minChar: number;
        limChar: number;
    }
    interface FormalParameterInfo {
        name: string;
        isVariable: boolean;
        docComment: string;
        minChar: number;
        limChar: number;
    }
    interface ActualSignatureInfo {
        parameterMinChar: number;
        parameterLimChar: number;
        currentParameterIsTypeParameter: boolean;
        currentParameter: number;
    }
    interface ClassifiedSpan {
        textSpan: TypeScript.TextSpan;
        classificationType: string;
    }
    interface NavigationBarItem {
        text: string;
        kind: string;
        kindModifiers: string;
        spans: TypeScript.TextSpan[];
        childItems: NavigationBarItem[];
        indent: number;
        bolded: boolean;
        grayed: boolean;
    }
    interface TodoCommentDescriptor {
        text: string;
        priority: number;
    }
    interface TodoComment {
        descriptor: TodoCommentDescriptor;
        message: string;
        position: number;
    }
    class TextChange {
        span: TypeScript.TextSpan;
        newText: string;
    }
    interface RenameLocation {
        textSpan: TypeScript.TextSpan;
        fileName: string;
    }
    interface ReferenceEntry {
        textSpan: TypeScript.TextSpan;
        fileName: string;
        isWriteAccess: boolean;
    }
    interface NavigateToItem {
        name: string;
        kind: string;
        kindModifiers: string;
        matchKind: string;
        fileName: string;
        textSpan: TypeScript.TextSpan;
        containerName: string;
        containerKind: string;
    }
    interface EditorOptions {
        IndentSize: number;
        TabSize: number;
        NewLineCharacter: string;
        ConvertTabsToSpaces: boolean;
    }
    interface FormatCodeOptions extends EditorOptions {
        InsertSpaceAfterCommaDelimiter: boolean;
        InsertSpaceAfterSemicolonInForStatements: boolean;
        InsertSpaceBeforeAndAfterBinaryOperators: boolean;
        InsertSpaceAfterKeywordsInControlFlowStatements: boolean;
        InsertSpaceAfterFunctionKeywordForAnonymousFunctions: boolean;
        InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: boolean;
        PlaceOpenBraceOnNewLineForFunctions: boolean;
        PlaceOpenBraceOnNewLineForControlBlocks: boolean;
    }
    interface DefinitionInfo {
        fileName: string;
        textSpan: TypeScript.TextSpan;
        kind: string;
        name: string;
        containerKind: string;
        containerName: string;
    }
    interface SymbolDisplayPart {
        text: string;
        kind: string;
    }
    interface QuickInfo {
        kind: string;
        kindModifiers: string;
        textSpan: TypeScript.TextSpan;
        displayParts: SymbolDisplayPart[];
        documentation: SymbolDisplayPart[];
    }
    interface RenameInfo {
        canRename: boolean;
        localizedErrorMessage: string;
        displayName: string;
        fullDisplayName: string;
        kind: string;
        kindModifiers: string;
        triggerSpan: TypeScript.TextSpan;
    }
    interface SignatureHelpParameter {
        name: string;
        documentation: SymbolDisplayPart[];
        displayParts: SymbolDisplayPart[];
        isOptional: boolean;
    }
    interface SignatureHelpItem {
        isVariadic: boolean;
        prefixDisplayParts: SymbolDisplayPart[];
        suffixDisplayParts: SymbolDisplayPart[];
        separatorDisplayParts: SymbolDisplayPart[];
        parameters: SignatureHelpParameter[];
        documentation: SymbolDisplayPart[];
    }
    interface SignatureHelpItems {
        items: SignatureHelpItem[];
        applicableSpan: TypeScript.TextSpan;
        selectedItemIndex: number;
        argumentIndex: number;
        argumentCount: number;
    }
    interface CompletionInfo {
        isMemberCompletion: boolean;
        entries: CompletionEntry[];
    }
    interface CompletionEntry {
        name: string;
        kind: string;
        kindModifiers: string;
    }
    interface CompletionEntryDetails {
        name: string;
        kind: string;
        kindModifiers: string;
        displayParts: SymbolDisplayPart[];
        documentation: SymbolDisplayPart[];
    }
    interface EmitOutput {
        outputFiles: OutputFile[];
        emitOutputStatus: EmitReturnStatus;
    }
    enum OutputFileType {
        JavaScript = 0,
        SourceMap = 1,
        Declaration = 2,
    }
    interface OutputFile {
        name: string;
        writeByteOrderMark: boolean;
        text: string;
    }
    enum EndOfLineState {
        Start = 0,
        InMultiLineCommentTrivia = 1,
        InSingleQuoteStringLiteral = 2,
        InDoubleQuoteStringLiteral = 3,
    }
    enum TokenClass {
        Punctuation = 0,
        Keyword = 1,
        Operator = 2,
        Comment = 3,
        Whitespace = 4,
        Identifier = 5,
        NumberLiteral = 6,
        StringLiteral = 7,
        RegExpLiteral = 8,
    }
    interface ClassificationResult {
        finalLexState: EndOfLineState;
        entries: ClassificationInfo[];
    }
    interface ClassificationInfo {
        length: number;
        classification: TokenClass;
    }
    interface Classifier {
        getClassificationsForLine(text: string, lexState: EndOfLineState, classifyKeywordsInGenerics?: boolean): ClassificationResult;
    }
    interface DocumentRegistry {
        acquireDocument(filename: string, compilationSettings: CompilerOptions, scriptSnapshot: TypeScript.IScriptSnapshot, version: string, isOpen: boolean): SourceFile;
        updateDocument(sourceFile: SourceFile, filename: string, compilationSettings: CompilerOptions, scriptSnapshot: TypeScript.IScriptSnapshot, version: string, isOpen: boolean, textChangeRange: TypeScript.TextChangeRange): SourceFile;
        releaseDocument(filename: string, compilationSettings: CompilerOptions): void;
    }
    class ScriptElementKind {
        static unknown: string;
        static keyword: string;
        static scriptElement: string;
        static moduleElement: string;
        static classElement: string;
        static interfaceElement: string;
        static enumElement: string;
        static variableElement: string;
        static localVariableElement: string;
        static functionElement: string;
        static localFunctionElement: string;
        static memberFunctionElement: string;
        static memberGetAccessorElement: string;
        static memberSetAccessorElement: string;
        static memberVariableElement: string;
        static constructorImplementationElement: string;
        static callSignatureElement: string;
        static indexSignatureElement: string;
        static constructSignatureElement: string;
        static parameterElement: string;
        static typeParameterElement: string;
        static primitiveType: string;
        static label: string;
        static alias: string;
    }
    class ScriptElementKindModifier {
        static none: string;
        static publicMemberModifier: string;
        static privateMemberModifier: string;
        static protectedMemberModifier: string;
        static exportedModifier: string;
        static ambientModifier: string;
        static staticModifier: string;
    }
    class ClassificationTypeNames {
        static comment: string;
        static identifier: string;
        static keyword: string;
        static numericLiteral: string;
        static operator: string;
        static stringLiteral: string;
        static whiteSpace: string;
        static text: string;
        static punctuation: string;
        static className: string;
        static enumName: string;
        static interfaceName: string;
        static moduleName: string;
        static typeParameterName: string;
    }
    function displayPartsToString(displayParts: SymbolDisplayPart[]): string;
    function spacePart(): SymbolDisplayPart;
    function keywordPart(kind: SyntaxKind): SymbolDisplayPart;
    function punctuationPart(kind: SyntaxKind): SymbolDisplayPart;
    function operatorPart(kind: SyntaxKind): SymbolDisplayPart;
    function textPart(text: string): SymbolDisplayPart;
    function lineBreakPart(): SymbolDisplayPart;
    function symbolPart(text: string, symbol: Symbol): SymbolDisplayPart;
    function typeToDisplayParts(typechecker: TypeChecker, type: Type, enclosingDeclaration?: Node, flags?: TypeFormatFlags): SymbolDisplayPart[];
    function symbolToDisplayParts(typeChecker: TypeChecker, symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags, flags?: SymbolFormatFlags): SymbolDisplayPart[];
    function getDefaultCompilerOptions(): CompilerOptions;
    function compareDataObjects(dst: any, src: any): boolean;
    class OperationCanceledException {
    }
    class CancellationTokenObject {
        private cancellationToken;
        static None: CancellationTokenObject;
        constructor(cancellationToken: CancellationToken);
        isCancellationRequested(): boolean;
        throwIfCancellationRequested(): void;
    }
    function createDocumentRegistry(): DocumentRegistry;
    function getNodeModifiers(node: Node): string;
    function createLanguageService(host: LanguageServiceHost, documentRegistry: DocumentRegistry): LanguageService;
    function createClassifier(host: Logger): Classifier;
}
declare module TypeScript {
    interface ILineAndCharacter {
        line: number;
        character: number;
    }
    interface IFileReference extends ILineAndCharacter {
        path: string;
        isResident: boolean;
        position: number;
        length: number;
    }
    interface IPreProcessedFileInfo {
        referencedFiles: IFileReference[];
        importedFiles: IFileReference[];
        diagnostics: Diagnostic[];
        isLibFile: boolean;
    }
    var tripleSlashReferenceRegExp: RegExp;
    function preProcessFile(fileName: string, sourceText: IScriptSnapshot, readImportFiles?: boolean): IPreProcessedFileInfo;
    function getReferencedFiles(fileName: string, sourceText: IScriptSnapshot): IFileReference[];
}
declare var debugObjectHost: any;
declare module ts {
    interface ScriptSnapshotShim {
        getText(start: number, end: number): string;
        getLength(): number;
        getLineStartPositions(): string;
        getChangeRange(oldSnapshot: ScriptSnapshotShim): string;
    }
    interface LanguageServiceShimHost extends Logger {
        getCompilationSettings(): string;
        getScriptFileNames(): string;
        getScriptVersion(fileName: string): string;
        getScriptIsOpen(fileName: string): boolean;
        getScriptSnapshot(fileName: string): ScriptSnapshotShim;
        getLocalizedDiagnosticMessages(): string;
        getCancellationToken(): CancellationToken;
        getCurrentDirectory(): string;
        getDefaultLibFilename(): string;
    }
    interface ShimFactory {
        registerShim(shim: Shim): void;
        unregisterShim(shim: Shim): void;
    }
    interface Shim {
        dispose(dummy: any): void;
    }
    interface LanguageServiceShim extends Shim {
        languageService: LanguageService;
        dispose(dummy: any): void;
        refresh(throwOnError: boolean): void;
        cleanupSemanticCache(): void;
        getSyntacticDiagnostics(fileName: string): string;
        getSemanticDiagnostics(fileName: string): string;
        getCompilerOptionsDiagnostics(): string;
        getSyntacticClassifications(fileName: string, start: number, length: number): string;
        getCompletionsAtPosition(fileName: string, position: number, isMemberCompletion: boolean): string;
        getCompletionEntryDetails(fileName: string, position: number, entryName: string): string;
        getQuickInfoAtPosition(fileName: string, position: number): string;
        getNameOrDottedNameSpan(fileName: string, startPos: number, endPos: number): string;
        getBreakpointStatementAtPosition(fileName: string, position: number): string;
        getSignatureHelpItems(fileName: string, position: number): string;
        getSignatureAtPosition(fileName: string, position: number): string;
        getRenameInfo(fileName: string, position: number): string;
        findRenameLocations(fileName: string, position: number, findInStrings: boolean, findInComments: boolean): string;
        getDefinitionAtPosition(fileName: string, position: number): string;
        getReferencesAtPosition(fileName: string, position: number): string;
        getOccurrencesAtPosition(fileName: string, position: number): string;
        getImplementorsAtPosition(fileName: string, position: number): string;
        getNavigateToItems(searchValue: string): string;
        getNavigationBarItems(fileName: string): string;
        getOutliningSpans(fileName: string): string;
        getTodoComments(fileName: string, todoCommentDescriptors: string): string;
        getBraceMatchingAtPosition(fileName: string, position: number): string;
        getIndentationAtPosition(fileName: string, position: number, options: string): string;
        getFormattingEditsForRange(fileName: string, start: number, end: number, options: string): string;
        getFormattingEditsForDocument(fileName: string, options: string): string;
        getFormattingEditsAfterKeystroke(fileName: string, position: number, key: string, options: string): string;
        getEmitOutput(fileName: string): string;
    }
    interface ClassifierShim extends Shim {
        getClassificationsForLine(text: string, lexState: EndOfLineState, classifyKeywordsInGenerics?: boolean): string;
    }
    interface CoreServicesShim extends Shim {
        getPreProcessedFileInfo(fileName: string, sourceText: TypeScript.IScriptSnapshot): string;
        getDefaultCompilationSettings(): string;
    }
    enum LanguageVersion {
        EcmaScript3 = 0,
        EcmaScript5 = 1,
    }
    enum ModuleGenTarget {
        Unspecified = 0,
        Synchronous = 1,
        Asynchronous = 2,
    }
    interface CompilationSettings {
        propagateEnumConstants?: boolean;
        removeComments?: boolean;
        watch?: boolean;
        noResolve?: boolean;
        allowAutomaticSemicolonInsertion?: boolean;
        noImplicitAny?: boolean;
        noLib?: boolean;
        codeGenTarget?: LanguageVersion;
        moduleGenTarget?: ModuleGenTarget;
        outFileOption?: string;
        outDirOption?: string;
        mapSourceFiles?: boolean;
        mapRoot?: string;
        sourceRoot?: string;
        generateDeclarationFiles?: boolean;
        useCaseSensitiveFileResolution?: boolean;
        gatherDiagnostics?: boolean;
        codepage?: number;
        emitBOM?: boolean;
        [index: string]: any;
    }
    class LanguageServiceShimHostAdapter implements LanguageServiceHost {
        private shimHost;
        constructor(shimHost: LanguageServiceShimHost);
        log(s: string): void;
        getCompilationSettings(): CompilerOptions;
        getScriptFileNames(): string[];
        getScriptSnapshot(fileName: string): TypeScript.IScriptSnapshot;
        getScriptVersion(fileName: string): string;
        getScriptIsOpen(fileName: string): boolean;
        getLocalizedDiagnosticMessages(): any;
        getCancellationToken(): CancellationToken;
        getDefaultLibFilename(): string;
        getCurrentDirectory(): string;
    }
    class TypeScriptServicesFactory implements ShimFactory {
        private _shims;
        private documentRegistry;
        createLanguageServiceShim(host: LanguageServiceShimHost): LanguageServiceShim;
        createClassifierShim(logger: Logger): ClassifierShim;
        createCoreServicesShim(logger: Logger): CoreServicesShim;
        close(): void;
        registerShim(shim: Shim): void;
        unregisterShim(shim: Shim): void;
    }
}
declare module TypeScript.Services {
    var TypeScriptServicesFactory: typeof ts.TypeScriptServicesFactory;
}
