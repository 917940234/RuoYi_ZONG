package com.ruoyi.product.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.product.mapper.ProductBlastFurnaceLevelMapper;
import com.ruoyi.product.domain.ProductBlastFurnaceLevel;
import com.ruoyi.product.service.IProductBlastFurnaceLevelService;
import com.ruoyi.common.core.text.Convert;

/**
 * 高炉液位数据监控Service业务层处理
 * 
 * @author zongyoucheng
 * @date 2022-09-26
 */
@Service
public class ProductBlastFurnaceLevelServiceImpl implements IProductBlastFurnaceLevelService 
{
    @Autowired
    private ProductBlastFurnaceLevelMapper productBlastFurnaceLevelMapper;

    /**
     * 查询高炉液位数据监控
     * 
     * @param blastFurnaceLevelId 高炉液位数据监控主键
     * @return 高炉液位数据监控
     */
    @Override
    public ProductBlastFurnaceLevel selectProductBlastFurnaceLevelByBlastFurnaceLevelId(Long blastFurnaceLevelId)
    {
        return productBlastFurnaceLevelMapper.selectProductBlastFurnaceLevelByBlastFurnaceLevelId(blastFurnaceLevelId);
    }

    /**
     * 查询高炉液位数据监控列表
     * 
     * @param productBlastFurnaceLevel 高炉液位数据监控
     * @return 高炉液位数据监控
     */
    @Override
    public List<ProductBlastFurnaceLevel> selectProductBlastFurnaceLevelList(ProductBlastFurnaceLevel productBlastFurnaceLevel)
    {
        return productBlastFurnaceLevelMapper.selectProductBlastFurnaceLevelList(productBlastFurnaceLevel);
    }

    /**
     * 新增高炉液位数据监控
     * 
     * @param productBlastFurnaceLevel 高炉液位数据监控
     * @return 结果
     */
    @Override
    public int insertProductBlastFurnaceLevel(ProductBlastFurnaceLevel productBlastFurnaceLevel)
    {
        return productBlastFurnaceLevelMapper.insertProductBlastFurnaceLevel(productBlastFurnaceLevel);
    }

    /**
     * 修改高炉液位数据监控
     * 
     * @param productBlastFurnaceLevel 高炉液位数据监控
     * @return 结果
     */
    @Override
    public int updateProductBlastFurnaceLevel(ProductBlastFurnaceLevel productBlastFurnaceLevel)
    {
        return productBlastFurnaceLevelMapper.updateProductBlastFurnaceLevel(productBlastFurnaceLevel);
    }

    /**
     * 批量删除高炉液位数据监控
     * 
     * @param blastFurnaceLevelIds 需要删除的高炉液位数据监控主键
     * @return 结果
     */
    @Override
    public int deleteProductBlastFurnaceLevelByBlastFurnaceLevelIds(String blastFurnaceLevelIds)
    {
        return productBlastFurnaceLevelMapper.deleteProductBlastFurnaceLevelByBlastFurnaceLevelIds(Convert.toStrArray(blastFurnaceLevelIds));
    }

    /**
     * 删除高炉液位数据监控信息
     * 
     * @param blastFurnaceLevelId 高炉液位数据监控主键
     * @return 结果
     */
    @Override
    public int deleteProductBlastFurnaceLevelByBlastFurnaceLevelId(Long blastFurnaceLevelId)
    {
        return productBlastFurnaceLevelMapper.deleteProductBlastFurnaceLevelByBlastFurnaceLevelId(blastFurnaceLevelId);
    }
}
