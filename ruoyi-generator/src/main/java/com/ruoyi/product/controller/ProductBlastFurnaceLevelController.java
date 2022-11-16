package com.ruoyi.product.controller;

import java.io.IOException;
import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ruoyi.product.domain.ProductBlastFurnaceStatus;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.ruoyi.common.annotation.Log;
import com.ruoyi.common.enums.BusinessType;
import com.ruoyi.product.domain.ProductBlastFurnaceLevel;
import com.ruoyi.product.service.IProductBlastFurnaceLevelService;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.common.core.page.TableDataInfo;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 铁水包液位Controller
 * 
 * @author zongyoucheng
 * @date 2022-11-24
 */
@Controller
@RequestMapping("/product/blastfurnacelevel")
public class ProductBlastFurnaceLevelController extends BaseController
{
    private String prefix = "product/blastfurnacelevel";

    @Autowired
    private IProductBlastFurnaceLevelService productBlastFurnaceLevelService;

    @RequiresPermissions("product:blastfurnacelevel:view")
    @GetMapping()
    public String blastfurnacelevel()
    {
        return prefix + "/blastfurnacelevel";
    }

    /**
     * product:blastfurnacelevel:echarts返回到echarts页面(权限决定是否读取到该方法，return决定跳转到何页面，getmapping不能重复，会报错)
     * @return
     */
    @RequiresPermissions("product:blastfurnacelevel:echarts")
    @GetMapping("/echarts")
    public String echarts()
    {
        return prefix + "/echarts.html";
    }

    /**
     * product:blastfurnacelevel:realtimeecharts返回到echarts页面(权限决定是否读取到该方法，return决定跳转到何页面，getmapping不能重复，会报错)
     * @return
     */
    @RequiresPermissions("product:blastfurnacelevel:realtimeecharts")
    @GetMapping("/realtimeecharts")
    public String realtimeecharts()
    {
        return prefix + "/realtimeecharts.html";
    }

    /**
     * 查询铁水包液位列表
     */
    @RequiresPermissions("product:blastfurnacelevel:list")
    @PostMapping("/list")
    @ResponseBody
    public TableDataInfo list(ProductBlastFurnaceLevel productBlastFurnaceLevel)
    {
        startPage();
        List<ProductBlastFurnaceLevel> list = productBlastFurnaceLevelService.selectProductBlastFurnaceLevelList(productBlastFurnaceLevel);
        return getDataTable(list);
    }

    /**
     * 导出铁水包液位列表
     */
    @RequiresPermissions("product:blastfurnacelevel:export")
    @Log(title = "铁水包液位", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    @ResponseBody
    public AjaxResult export(ProductBlastFurnaceLevel productBlastFurnaceLevel)
    {
        List<ProductBlastFurnaceLevel> list = productBlastFurnaceLevelService.selectProductBlastFurnaceLevelList(productBlastFurnaceLevel);
        ExcelUtil<ProductBlastFurnaceLevel> util = new ExcelUtil<ProductBlastFurnaceLevel>(ProductBlastFurnaceLevel.class);
        return util.exportExcel(list, "铁水包液位数据");
    }

    /**
     * 新增铁水包液位
     */
    @GetMapping("/add")
    public String add()
    {
        return prefix + "/add";
    }

    /**
     * 新增保存铁水包液位
     */
    @RequiresPermissions("product:blastfurnacelevel:add")
    @Log(title = "铁水包液位", businessType = BusinessType.INSERT)
    @PostMapping("/add")
    @ResponseBody
    public AjaxResult addSave(ProductBlastFurnaceLevel productBlastFurnaceLevel)
    {
        return toAjax(productBlastFurnaceLevelService.insertProductBlastFurnaceLevel(productBlastFurnaceLevel));
    }

    /**
     * 修改铁水包液位
     */
    @RequiresPermissions("product:blastfurnacelevel:edit")
    @GetMapping("/edit/{blastFurnaceLevelId}")
    public String edit(@PathVariable("blastFurnaceLevelId") Long blastFurnaceLevelId, ModelMap mmap)
    {
        ProductBlastFurnaceLevel productBlastFurnaceLevel = productBlastFurnaceLevelService.selectProductBlastFurnaceLevelByBlastFurnaceLevelId(blastFurnaceLevelId);
        mmap.put("productBlastFurnaceLevel", productBlastFurnaceLevel);
        return prefix + "/edit";
    }

    /**
     * 修改保存铁水包液位
     */
    @RequiresPermissions("product:blastfurnacelevel:edit")
    @Log(title = "铁水包液位", businessType = BusinessType.UPDATE)
    @PostMapping("/edit")
    @ResponseBody
    public AjaxResult editSave(ProductBlastFurnaceLevel productBlastFurnaceLevel)
    {
        return toAjax(productBlastFurnaceLevelService.updateProductBlastFurnaceLevel(productBlastFurnaceLevel));
    }

    /**
     * 删除铁水包液位
     */
    @RequiresPermissions("product:blastfurnacelevel:remove")
    @Log(title = "铁水包液位", businessType = BusinessType.DELETE)
    @PostMapping( "/remove")
    @ResponseBody
    public AjaxResult remove(String ids)
    {
        return toAjax(productBlastFurnaceLevelService.deleteProductBlastFurnaceLevelByBlastFurnaceLevelIds(ids));
    }

    /**
     * 高炉液位数据折线图表json
     */
    @PostMapping("/listEcharts")
    public void selectListEcharts(ProductBlastFurnaceLevel productBlastFurnaceLevel, Model model, HttpServletRequest request, HttpServletResponse response) throws IOException {
        //查询数据
        List<ProductBlastFurnaceLevel> list =  productBlastFurnaceLevelService.selectProductBlastFurnaceLevelListNew(productBlastFurnaceLevel);
        //提供java-json相互转换功能的类
        ObjectMapper mapper = new ObjectMapper();
        //将list中的对象转换为Json格式的数组
        String json = mapper.writeValueAsString(list);
        //System.out.println(json);
        //将json数据返回给客户端
        response.setContentType("text/html; charset=utf-8");
        response.getWriter().write(json);
    }

    /**
     * 高炉液位数据实时液位图表json
     * 目的：读取最新一行的所有数据，传递给前端
     */
    @PostMapping("/realTimeEcharts")
    public void selectRealTimeEcharts(Long blastFurnaceLevelId, Model model, HttpServletRequest request, HttpServletResponse response) throws IOException {
        //查询数据
        ProductBlastFurnaceLevel list = productBlastFurnaceLevelService.selectProductBlastFurnaceLevelByBlastFurnaceLevelId(1L);
        //提供java-json相互转换功能的类
        ObjectMapper mapper = new ObjectMapper();
        //将list中的对象转换为Json格式的数组
        String json = mapper.writeValueAsString(list);
        System.out.println(json);
        //将json数据返回给客户端
        response.setContentType("text/html; charset=utf-8");
        response.getWriter().write(json);
    }
}
